import cors from 'cors';
import { v2 as cloudinary } from 'cloudinary';
import express from 'express';
import helmet from 'helmet';
import { MongoClient, ObjectId } from 'mongodb';
import multer from 'multer';
import nodemailer from 'nodemailer';
import { appendFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const dataDir = path.join(__dirname, 'data');
const inquiryFile = path.join(dataDir, 'inquiries.jsonl');
const eventFile = path.join(dataDir, 'analytics-events.jsonl');
const statusFile = path.join(dataDir, 'inquiry-status.json');
const productsFile = path.join(dataDir, 'products.json');
const mediaFile = path.join(dataDir, 'media.json');
const categories = new Set(['Wooden Pallets', 'Wooden Crates', 'Plastic Pallets', 'Jumbo Bags', 'Plastic Jumbo Bags', 'Custom Orders', 'Custom Order']);
const inquiryStatuses = new Set(['new', 'contacted', 'quoted', 'won', 'lost', 'spam']);
const requestsByIp = new Map();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter(_request, file, callback) {
    if (!file.mimetype.startsWith('image/')) {
      callback(new Error('Only image uploads are allowed.'));
      return;
    }
    callback(null, true);
  }
});

await loadEnv();
await mkdir(dataDir, { recursive: true });

let mongoClient = null;
let database = null;
if (process.env.MONGODB_URI) {
  initDatabase();
}

async function initDatabase() {
  mongoClient = new MongoClient(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: Number(process.env.MONGODB_TIMEOUT_MS || 8000)
  });
  try {
    await mongoClient.connect();
    database = mongoClient.db(process.env.MONGODB_DB || 'khawaja_carpentry');
    await Promise.all([
      database.collection('inquiries').createIndex({ submittedAt: -1 }),
      database.collection('products').createIndex({ slug: 1 }, { unique: true }),
      database.collection('media').createIndex({ createdAt: -1 })
    ]);
    console.log('MongoDB Atlas connected.');
  } catch (error) {
    console.error('MongoDB connection failed. Falling back to file storage:', error.message);
    database = null;
    await mongoClient.close().catch(() => {});
  }
}

if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
}

const app = express();
const port = Number(process.env.PORT || 5000);
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.enable('trust proxy');
app.use((request, response, next) => {
  const shouldForceHttps = process.env.NODE_ENV === 'production';
  const protocol = request.headers['x-forwarded-proto'];
  if (shouldForceHttps && protocol && protocol !== 'https') {
    response.redirect(301, `https://${request.headers.host}${request.originalUrl}`);
    return;
  }
  next();
});
app.use(helmet({
  contentSecurityPolicy: false,
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error('Origin is not allowed'));
  }
}));
app.use(express.json({ limit: '20kb' }));
app.use(express.static(path.join(rootDir, 'dist'), {
  maxAge: process.env.NODE_ENV === 'production' ? '1y' : 0,
  immutable: process.env.NODE_ENV === 'production'
}));

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, service: 'mujahid-hussain-carpentry-api' });
});

app.post('/api/events', async (request, response) => {
  const event = {
    eventName: sanitizeText(request.body?.eventName, 80),
    payload: sanitizeObject(request.body?.payload || {}),
    path: sanitizeText(request.body?.path, 180),
    timestamp: new Date().toISOString(),
    ip: getIp(request)
  };

  if (event.eventName) {
    await appendJsonLine(eventFile, event);
  }

  response.status(204).end();
});

app.post('/api/inquiries', async (request, response) => {
  const ip = getIp(request);
  if (isRateLimited(ip)) {
    response.status(429).json({ ok: false, message: 'Too many requests. Please try again in a few minutes.' });
    return;
  }

  const inquiry = normalizeInquiry(request.body, ip);
  const validationError = validateInquiry(inquiry);
  if (validationError) {
    response.status(400).json({ ok: false, message: validationError });
    return;
  }

  if (inquiry.website) {
    response.json({ ok: true, message: 'Inquiry received.' });
    return;
  }

  await saveInquiry(inquiry);
  const emailResult = await sendInquiryEmail(inquiry);

  response.json({
    ok: true,
    inquiryId: inquiry.id,
    emailSent: emailResult.sent,
    message: emailResult.sent
      ? 'Inquiry submitted successfully. Our team will contact you shortly.'
      : 'Inquiry saved successfully. Email delivery is not configured on this server.'
  });
});

app.get('/api/admin/inquiries', requireAdmin, async (_request, response) => {
  const [inquiries, statusMap] = await Promise.all([readInquiries(), readStatusMap()]);
  const rows = inquiries
    .map((inquiry) => ({
      ...inquiry,
      status: statusMap[inquiry.id]?.status || 'new',
      notes: statusMap[inquiry.id]?.notes || '',
      updatedAt: statusMap[inquiry.id]?.updatedAt || inquiry.submittedAt
    }))
    .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());

  response.json({
    ok: true,
    inquiries: rows,
    totals: rows.reduce((summary, inquiry) => {
      summary[inquiry.status] = (summary[inquiry.status] || 0) + 1;
      summary.all += 1;
      return summary;
    }, { all: 0, new: 0, contacted: 0, quoted: 0, won: 0, lost: 0, spam: 0 })
  });
});

app.patch('/api/admin/inquiries/:id', requireAdmin, async (request, response) => {
  const id = sanitizeText(request.params.id, 80);
  const status = sanitizeText(request.body?.status, 30) || 'new';
  const notes = sanitizeText(request.body?.notes, 800);

  if (!inquiryStatuses.has(status)) {
    response.status(400).json({ ok: false, message: 'Invalid inquiry status.' });
    return;
  }

  const inquiries = await readInquiries();
  if (!inquiries.some((inquiry) => inquiry.id === id)) {
    response.status(404).json({ ok: false, message: 'Inquiry not found.' });
    return;
  }

  const statusMap = await readStatusMap();
  statusMap[id] = {
    status,
    notes,
    updatedAt: new Date().toISOString()
  };
  await saveInquiryStatus(id, statusMap[id], statusMap);

  response.json({ ok: true, inquiry: { id, ...statusMap[id] } });
});

app.post('/api/admin/email-test', requireAdmin, async (request, response) => {
  const to = sanitizeText(request.body?.to || process.env.INQUIRY_TO_EMAIL || 'nh534392@gmail.com', 120);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    response.status(400).json({ ok: false, message: 'Please provide a valid email address.' });
    return;
  }

  const result = await sendTestEmail(to);
  if (!result.sent) {
    response.status(503).json({ ok: false, message: result.message || 'SMTP is not configured or email delivery failed.' });
    return;
  }
  response.json({ ok: true, message: `Test email sent to ${to}.` });
});

app.get('/api/products', async (_request, response) => {
  const products = await getProducts();
  response.json({ ok: true, products: products.filter((product) => product.status !== 'draft') });
});

app.get('/api/admin/products', requireAdmin, async (_request, response) => {
  response.json({ ok: true, products: await getProducts(true) });
});

app.post('/api/admin/products', requireAdmin, async (request, response) => {
  const product = normalizeProduct(request.body);
  const validationError = validateProduct(product);
  if (validationError) {
    response.status(400).json({ ok: false, message: validationError });
    return;
  }
  response.status(201).json({ ok: true, product: await createProduct(product) });
});

app.patch('/api/admin/products/:id', requireAdmin, async (request, response) => {
  const product = normalizeProduct(request.body);
  const validationError = validateProduct(product);
  if (validationError) {
    response.status(400).json({ ok: false, message: validationError });
    return;
  }
  const updated = await updateProduct(request.params.id, product);
  if (!updated) {
    response.status(404).json({ ok: false, message: 'Product not found.' });
    return;
  }
  response.json({ ok: true, product: updated });
});

app.delete('/api/admin/products/:id', requireAdmin, async (request, response) => {
  const removed = await deleteProduct(request.params.id);
  if (!removed) {
    response.status(404).json({ ok: false, message: 'Product not found.' });
    return;
  }
  response.json({ ok: true });
});

app.get('/api/admin/media', requireAdmin, async (_request, response) => {
  response.json({ ok: true, media: await getMedia() });
});

app.post('/api/admin/media', requireAdmin, upload.single('image'), async (request, response) => {
  if (!request.file) {
    response.status(400).json({ ok: false, message: 'Please choose an image to upload.' });
    return;
  }
  if (!isCloudinaryConfigured()) {
    response.status(503).json({ ok: false, message: 'Cloudinary is not configured. Add Cloudinary env variables first.' });
    return;
  }

  const uploaded = await uploadToCloudinary(request.file);
  const media = await saveMedia({
    url: uploaded.secure_url,
    publicId: uploaded.public_id,
    width: uploaded.width,
    height: uploaded.height,
    format: uploaded.format,
    bytes: uploaded.bytes,
    originalName: sanitizeText(request.file.originalname, 160),
    alt: sanitizeText(request.body?.alt, 160),
    createdAt: new Date().toISOString()
  });
  response.status(201).json({ ok: true, media });
});

app.use((_request, response) => {
  response.sendFile(path.join(rootDir, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Mujahid Hussain Carpentry API running on http://127.0.0.1:${port}`);
});

async function loadEnv() {
  try {
    const text = await readFile(path.join(rootDir, '.env'), 'utf8');
    text.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const separatorIndex = trimmed.indexOf('=');
      if (separatorIndex === -1) return;
      const key = trimmed.slice(0, separatorIndex).trim();
      const value = trimmed.slice(separatorIndex + 1).trim().replace(/^"|"$/g, '');
      if (!process.env[key]) process.env[key] = value;
    });
  } catch {
    // .env is optional in production hosts.
  }
}

function normalizeInquiry(input = {}, ip) {
  const submittedAt = new Date();
  const productType = sanitizeText(input.productType || input.category || 'Custom Orders', 60);

  return {
    id: `INQ-${submittedAt.getTime()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    name: sanitizeText(input.name, 100),
    phone: sanitizeText(input.phone, 40),
    email: sanitizeText(input.email, 120).toLowerCase(),
    productType: productType === 'Plastic Jumbo Bags' ? 'Jumbo Bags' : productType,
    quantity: sanitizeText(input.quantity, 40),
    city: sanitizeText(input.city, 80),
    message: sanitizeText(input.message, 1200),
    source: sanitizeText(input.source || 'website', 80),
    pageUrl: sanitizeText(input.pageUrl, 240),
    website: sanitizeText(input.website, 120),
    submittedAt: submittedAt.toISOString(),
    ip
  };
}

const defaultProducts = [
  {
    title: 'Wooden Pallets',
    slug: 'wooden-pallets',
    category: 'Industrial Wooden Pallets',
    summary: '20+ sizes. New, refurbished and used. Normal and heavy duty. ISPM-15.',
    description: 'Strong wooden pallets for warehouses, logistics, export, construction, manufacturing, and industrial storage.',
    href: '/wooden-pallets',
    buttonLabel: 'View All Sizes',
    imageUrl: 'https://mujahidhussaincarpentry.store/images/100cm%20x%20120cm.jpg',
    specs: ['20+ sizes', 'New and refurbished', 'ISPM-15 available', 'Custom sizes'],
    status: 'active',
    featured: true,
    sortOrder: 10
  },
  {
    title: 'Wooden Crates',
    slug: 'wooden-crates',
    category: 'Export Wooden Crates',
    summary: 'Brand new crates. Standard sizes plus custom. Export compliant.',
    description: 'Heavy-duty wooden crates for safe machinery packing, export shipping, storage, and industrial cargo protection.',
    href: '/wooden-crates',
    buttonLabel: 'View All Sizes',
    imageUrl: 'https://mujahidhussaincarpentry.store/images/wooden%20boxes.jpeg',
    specs: ['New only', 'Export quality', 'Custom heights', 'ISPM-15 available'],
    status: 'active',
    featured: true,
    sortOrder: 20
  },
  {
    title: 'Plastic Pallets',
    slug: 'plastic-pallets',
    category: 'Reusable Plastic Pallets',
    summary: '5 sizes. New and used. Normal and heavy duty. Hygienic.',
    description: 'Durable plastic pallets for food, pharmaceutical, warehouse, logistics, chemical, and industrial operations.',
    href: '/plastic-pallets',
    buttonLabel: 'View All Sizes',
    imageUrl: 'https://mujahidhussaincarpentry.store/images/plastic%20pallets.jpeg',
    specs: ['5 sizes', 'New and used', 'Normal and heavy duty', 'Washable'],
    status: 'active',
    featured: true,
    sortOrder: 30
  },
  {
    title: 'Plastic Jumbo Bags',
    slug: 'plastic-jumbo-bags',
    category: 'FIBC Jumbo Bags',
    summary: '500 kg to 2.5 TON. FIBC bulk bags for all industries.',
    description: 'Heavy-duty jumbo bags for construction, agriculture, minerals, chemicals, export, and bulk material handling.',
    href: '/plastic-jumbo-bags',
    buttonLabel: 'View All Sizes',
    imageUrl: 'https://mujahidhussaincarpentry.store/images/CP3%20Pallets.jpg',
    specs: ['500 KG', '1 Ton', '1.5 Ton', '2 Ton', '2.5 Ton'],
    status: 'active',
    featured: true,
    sortOrder: 40
  }
];

async function saveInquiry(inquiry) {
  if (database) {
    await database.collection('inquiries').insertOne({ ...inquiry, status: 'new', notes: '' });
  }
  await appendJsonLine(inquiryFile, inquiry);
}

async function readInquiries() {
  if (database) {
    return database.collection('inquiries')
      .find({})
      .sort({ submittedAt: -1 })
      .toArray();
  }
  return readJsonLines(inquiryFile);
}

async function saveInquiryStatus(id, statusData, statusMap) {
  if (database) {
    await database.collection('inquiries').updateOne({ id }, { $set: statusData });
  }
  await writeJson(statusFile, statusMap);
}

function normalizeProduct(input = {}) {
  return {
    title: sanitizeText(input.title, 120),
    slug: slugify(input.slug || input.title),
    category: sanitizeText(input.category, 120),
    summary: sanitizeText(input.summary, 260),
    description: sanitizeText(input.description, 900),
    href: sanitizeText(input.href, 160) || `/products/${slugify(input.slug || input.title)}`,
    buttonLabel: sanitizeText(input.buttonLabel, 60) || 'Learn More',
    imageUrl: sanitizeText(input.imageUrl, 400),
    specs: parseList(input.specs).slice(0, 16),
    status: input.status === 'draft' ? 'draft' : 'active',
    featured: Boolean(input.featured),
    sortOrder: Number.isFinite(Number(input.sortOrder)) ? Number(input.sortOrder) : 100,
    updatedAt: new Date().toISOString()
  };
}

function validateProduct(product) {
  if (!product.title || product.title.length < 2) return 'Product title is required.';
  if (!product.slug || product.slug.length < 2) return 'Product slug is required.';
  if (!product.summary || product.summary.length < 10) return 'Product summary is required.';
  if (!product.imageUrl || !/^https?:\/\//.test(product.imageUrl)) return 'A valid image URL is required.';
  return '';
}

async function getProducts(includeDrafts = false) {
  await ensureDefaultProducts();
  const products = database
    ? await database.collection('products').find(includeDrafts ? {} : { status: 'active' }).sort({ sortOrder: 1, title: 1 }).toArray()
    : (await readJsonFile(productsFile, [])).filter((product) => includeDrafts || product.status !== 'draft').sort(sortProducts);
  return products.map(serializeRecord);
}

async function ensureDefaultProducts() {
  if (database) {
    const count = await database.collection('products').countDocuments();
    if (count === 0) {
      const now = new Date().toISOString();
      await database.collection('products').insertMany(defaultProducts.map((product) => ({ ...product, createdAt: now, updatedAt: now })));
    }
    return;
  }

  const products = await readJsonFile(productsFile, []);
  if (products.length === 0) {
    const now = new Date().toISOString();
    await writeJson(productsFile, defaultProducts.map((product, index) => ({
      id: `local-product-${index + 1}`,
      ...product,
      createdAt: now,
      updatedAt: now
    })));
  }
}

async function createProduct(product) {
  const record = { ...product, createdAt: new Date().toISOString() };
  if (database) {
    const result = await database.collection('products').insertOne(record);
    return serializeRecord({ _id: result.insertedId, ...record });
  }

  const products = await readJsonFile(productsFile, []);
  const saved = { id: `local-product-${Date.now()}`, ...record };
  products.push(saved);
  await writeJson(productsFile, products.sort(sortProducts));
  return saved;
}

async function updateProduct(id, product) {
  if (database) {
    const _id = toObjectId(id);
    if (!_id) return null;
    const result = await database.collection('products').findOneAndUpdate(
      { _id },
      { $set: product },
      { returnDocument: 'after' }
    );
    return result ? serializeRecord(result) : null;
  }

  const products = await readJsonFile(productsFile, []);
  const index = products.findIndex((item) => item.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...product };
  await writeJson(productsFile, products.sort(sortProducts));
  return products[index];
}

async function deleteProduct(id) {
  if (database) {
    const _id = toObjectId(id);
    if (!_id) return false;
    const result = await database.collection('products').deleteOne({ _id });
    return result.deletedCount > 0;
  }

  const products = await readJsonFile(productsFile, []);
  const nextProducts = products.filter((item) => item.id !== id);
  if (nextProducts.length === products.length) return false;
  await writeJson(productsFile, nextProducts);
  return true;
}

async function getMedia() {
  const media = database
    ? await database.collection('media').find({}).sort({ createdAt: -1 }).toArray()
    : await readJsonFile(mediaFile, []);
  return media.map(serializeRecord);
}

async function saveMedia(media) {
  if (database) {
    const result = await database.collection('media').insertOne(media);
    return serializeRecord({ _id: result.insertedId, ...media });
  }

  const items = await readJsonFile(mediaFile, []);
  const saved = { id: `local-media-${Date.now()}`, ...media };
  items.unshift(saved);
  await writeJson(mediaFile, items);
  return saved;
}

function isCloudinaryConfigured() {
  return Boolean(process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET);
}

function uploadToCloudinary(file) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({
      folder: process.env.CLOUDINARY_FOLDER || 'khawaja-carpentry',
      resource_type: 'image'
    }, (error, result) => {
      if (error || !result) {
        reject(error || new Error('Cloudinary upload failed.'));
        return;
      }
      resolve(result);
    });
    stream.end(file.buffer);
  });
}

function slugify(value = '') {
  return sanitizeText(value, 120)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseList(value) {
  if (Array.isArray(value)) return value.map((item) => sanitizeText(item, 120)).filter(Boolean);
  return String(value || '')
    .split(/\r?\n|,/)
    .map((item) => sanitizeText(item, 120))
    .filter(Boolean);
}

function sortProducts(a, b) {
  return Number(a.sortOrder || 100) - Number(b.sortOrder || 100) || String(a.title).localeCompare(String(b.title));
}

function serializeRecord(record) {
  if (!record) return record;
  const { _id, ...rest } = record;
  return { id: String(_id || record.id), ...rest };
}

function toObjectId(id) {
  try {
    return new ObjectId(id);
  } catch {
    return null;
  }
}

function validateInquiry(inquiry) {
  if (!inquiry.name || inquiry.name.length < 2) return 'Please enter your full name.';
  if (!/^[+0-9\s-]{7,}$/.test(inquiry.phone)) return 'Please enter a valid phone number.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) return 'Please enter a valid email address.';
  if (!categories.has(inquiry.productType)) return 'Please select a valid product type.';
  if (!inquiry.message || inquiry.message.length < 10) return 'Please enter a message with your requirements.';
  return '';
}

function sanitizeText(value = '', maxLength = 500) {
  return String(value)
    .replace(/<[^>]*>/g, '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function sanitizeObject(value) {
  if (!value || typeof value !== 'object') return {};
  return Object.fromEntries(
    Object.entries(value).map(([key, item]) => [sanitizeText(key, 60), sanitizeText(item, 200)])
  );
}

function getIp(request) {
  return request.headers['x-forwarded-for']?.split(',')[0]?.trim() || request.socket.remoteAddress || 'unknown';
}

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 8;
  const history = (requestsByIp.get(ip) || []).filter((time) => now - time < windowMs);
  history.push(now);
  requestsByIp.set(ip, history);
  return history.length > maxRequests;
}

async function appendJsonLine(file, data) {
  await appendFile(file, `${JSON.stringify(data)}\n`, 'utf8');
}

async function readJsonLines(file) {
  try {
    const text = await readFile(file, 'utf8');
    return text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function readStatusMap() {
  try {
    return JSON.parse(await readFile(statusFile, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return {};
    throw error;
  }
}

async function readJsonFile(file, fallbackValue) {
  try {
    return JSON.parse(await readFile(file, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return fallbackValue;
    throw error;
  }
}

async function writeJson(file, data) {
  await writeFile(file, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function requireAdmin(request, response, next) {
  const username = process.env.ADMIN_USERNAME || 'admin';
  const password = process.env.ADMIN_PASSWORD || (process.env.NODE_ENV === 'production' ? '' : 'admin123');

  if (!password) {
    response.status(503).json({ ok: false, message: 'Admin credentials are not configured.' });
    return;
  }

  const credentials = parseBasicAuth(request.headers.authorization);
  if (!credentials || credentials.username !== username || credentials.password !== password) {
    response.setHeader('WWW-Authenticate', 'Basic realm="Inquiry Admin"');
    response.status(401).json({ ok: false, message: 'Admin login required.' });
    return;
  }

  next();
}

function parseBasicAuth(header = '') {
  const [scheme, token] = header.split(' ');
  if (scheme !== 'Basic' || !token) return null;

  try {
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    const separator = decoded.indexOf(':');
    if (separator === -1) return null;
    return {
      username: decoded.slice(0, separator),
      password: decoded.slice(separator + 1)
    };
  } catch {
    return null;
  }
}

async function sendInquiryEmail(inquiry) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return { sent: false, message: 'SMTP is not configured.' };
  }

  try {
    const transporter = createMailTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.INQUIRY_TO_EMAIL || 'nh534392@gmail.com',
      replyTo: inquiry.email,
      subject: `New Quote Request - ${inquiry.productType}`,
      text: formatEmailText(inquiry),
      html: formatEmailHtml(inquiry)
    });

    return { sent: true };
  } catch (error) {
    console.error('Email delivery failed:', error.message);
    return { sent: false, message: error.message };
  }
}

async function sendTestEmail(to) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return { sent: false, message: 'SMTP is not configured. Add SMTP_HOST, SMTP_USER, and SMTP_PASS.' };
  }

  try {
    const transporter = createMailTransporter();
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      subject: 'Mujahid Hussain Carpentry - Email Test',
      text: 'SMTP email delivery is working for the website contact and inquiry system.',
      html: '<p>SMTP email delivery is working for the website contact and inquiry system.</p>'
    });
    return { sent: true };
  } catch (error) {
    console.error('Test email delivery failed:', error.message);
    return { sent: false, message: error.message };
  }
}

function createMailTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
    connectionTimeout: Number(process.env.SMTP_TIMEOUT_MS || 10000),
    greetingTimeout: Number(process.env.SMTP_TIMEOUT_MS || 10000),
    socketTimeout: Number(process.env.SMTP_TIMEOUT_MS || 15000),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

function formatEmailText(inquiry) {
  return [
    `Inquiry ID: ${inquiry.id}`,
    `Submitted: ${inquiry.submittedAt}`,
    `Name: ${inquiry.name}`,
    `Phone: ${inquiry.phone}`,
    `Email: ${inquiry.email}`,
    `Product Type: ${inquiry.productType}`,
    `Quantity: ${inquiry.quantity || 'Not provided'}`,
    `City/Location: ${inquiry.city || 'Not provided'}`,
    `Source: ${inquiry.source}`,
    `Page URL: ${inquiry.pageUrl}`,
    '',
    'Message:',
    inquiry.message
  ].join('\n');
}

function formatEmailHtml(inquiry) {
  return `
    <h2>New Quote Request</h2>
    <p><strong>Inquiry ID:</strong> ${inquiry.id}</p>
    <p><strong>Submitted:</strong> ${inquiry.submittedAt}</p>
    <p><strong>Name:</strong> ${inquiry.name}</p>
    <p><strong>Phone:</strong> ${inquiry.phone}</p>
    <p><strong>Email:</strong> ${inquiry.email}</p>
    <p><strong>Product Type:</strong> ${inquiry.productType}</p>
    <p><strong>Quantity:</strong> ${inquiry.quantity || 'Not provided'}</p>
    <p><strong>City/Location:</strong> ${inquiry.city || 'Not provided'}</p>
    <p><strong>Source:</strong> ${inquiry.source}</p>
    <p><strong>Page URL:</strong> ${inquiry.pageUrl}</p>
    <p><strong>Message:</strong><br>${inquiry.message}</p>
  `;
}
