import { spawn } from 'node:child_process';

const port = Number(process.env.SMOKE_PORT || 5150);
const baseUrl = `http://127.0.0.1:${port}`;
const timeoutMs = Number(process.env.SMOKE_TIMEOUT_MS || 10000);

const checks = [
  { name: 'home route', path: '/', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'about route', path: '/about', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'products route', path: '/products', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'wooden pallets route', path: '/products/wooden-pallets', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'wooden crates route', path: '/products/wooden-crates', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'plastic pallets route', path: '/products/plastic-pallets', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'plastic jumbo bags route', path: '/products/plastic-jumbo-bags', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'services route', path: '/services', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'industries route', path: '/industries', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'gallery route', path: '/gallery', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'testimonials route', path: '/testimonials', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'faq route', path: '/faq', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'contact route', path: '/contact', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'quote route', path: '/quote', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'admin route', path: '/admin', expectStatus: 200, expectText: '<div id="root">' },
  { name: 'robots file', path: '/robots.txt', expectStatus: 200, expectText: 'Sitemap:' },
  { name: 'sitemap file', path: '/sitemap.xml', expectStatus: 200, expectText: '<urlset' },
  { name: 'health api', path: '/api/health', expectStatus: 200, expectJson: { ok: true } },
  { name: 'products api', path: '/api/products', expectStatus: 200, expectJson: { ok: true } },
  { name: 'admin auth guard', path: '/api/admin/inquiries', expectStatus: 401 }
];

const server = spawn(process.execPath, ['server/index.js'], {
  cwd: process.cwd(),
  env: {
    ...process.env,
    PORT: String(port),
    NODE_ENV: 'production',
    SKIP_DOTENV: 'true',
    ADMIN_USERNAME: 'admin',
    ADMIN_PASSWORD: 'smoke-test-password',
    MONGODB_URI: '',
    SMTP_HOST: '',
    SMTP_USER: '',
    SMTP_PASS: '',
    CLOUDINARY_CLOUD_NAME: '',
    CLOUDINARY_API_KEY: '',
    CLOUDINARY_API_SECRET: ''
  },
  stdio: ['ignore', 'pipe', 'pipe']
});

let serverOutput = '';
server.stdout.on('data', (chunk) => {
  serverOutput += chunk.toString();
});
server.stderr.on('data', (chunk) => {
  serverOutput += chunk.toString();
});

try {
  await waitForServer();
  for (const check of checks) {
    await runCheck(check);
  }
  await runInvalidInquiryCheck();
  console.log(`Production smoke checks passed at ${baseUrl}`);
} finally {
  server.kill();
}

async function waitForServer() {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (server.exitCode !== null) {
      throw new Error(`Server exited before smoke checks completed.\n${serverOutput}`);
    }

    try {
      const response = await fetchWithTimeout(`${baseUrl}/api/health`);
      if (response.ok) return;
    } catch {
      await delay(250);
    }
  }

  throw new Error(`Server did not become ready within ${timeoutMs}ms.\n${serverOutput}`);
}

async function runCheck(check) {
  const started = performance.now();
  const response = await fetchWithTimeout(`${baseUrl}${check.path}`);
  const elapsed = Math.round(performance.now() - started);

  if (response.status !== check.expectStatus) {
    throw new Error(`${check.name} returned ${response.status}; expected ${check.expectStatus}`);
  }

  const content = await response.text();
  if (check.expectText && !content.includes(check.expectText)) {
    throw new Error(`${check.name} did not include expected markup: ${check.expectText}`);
  }

  if (check.expectJson) {
    const data = JSON.parse(content);
    for (const [key, value] of Object.entries(check.expectJson)) {
      if (data[key] !== value) {
        throw new Error(`${check.name} JSON field ${key} was ${data[key]}; expected ${value}`);
      }
    }
  }

  console.log(`${check.name}: ${response.status} ${elapsed}ms`);
}

async function runInvalidInquiryCheck() {
  const response = await fetchWithTimeout(`${baseUrl}/api/inquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'A',
      phone: '123',
      email: 'invalid',
      productType: 'Wooden Pallets',
      message: 'short'
    })
  });

  if (response.status !== 400) {
    throw new Error(`invalid inquiry validation returned ${response.status}; expected 400`);
  }

  console.log('invalid inquiry validation: 400');
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
