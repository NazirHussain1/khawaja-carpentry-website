import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import nodemailer from 'nodemailer';
import { appendFile, mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const dataDir = path.join(__dirname, 'data');
const inquiryFile = path.join(dataDir, 'inquiries.jsonl');
const eventFile = path.join(dataDir, 'analytics-events.jsonl');
const categories = new Set(['Wooden Pallets', 'Wooden Crates', 'Plastic Pallets', 'Jumbo Bags', 'Plastic Jumbo Bags', 'Custom Orders', 'Custom Order']);
const requestsByIp = new Map();

await loadEnv();
await mkdir(dataDir, { recursive: true });

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

  await appendJsonLine(inquiryFile, inquiry);
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

async function sendInquiryEmail(inquiry) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return { sent: false };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.INQUIRY_TO_EMAIL || 'mujahidhussaincarpentry@gmail.com',
      replyTo: inquiry.email,
      subject: `New Quote Request - ${inquiry.productType}`,
      text: formatEmailText(inquiry),
      html: formatEmailHtml(inquiry)
    });

    return { sent: true };
  } catch (error) {
    console.error('Email delivery failed:', error.message);
    return { sent: false };
  }
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
