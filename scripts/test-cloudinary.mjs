#!/usr/bin/env node

import { v2 as cloudinary } from 'cloudinary';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Load environment variables
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
  } catch (error) {
    console.error('❌ Could not load .env file:', error.message);
    process.exit(1);
  }
}

await loadEnv();

console.log('🔍 Testing Cloudinary Configuration\n');

// Check environment variables
console.log('1️⃣ Checking Environment Variables:');
const requiredVars = ['CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET', 'CLOUDINARY_FOLDER'];
let allPresent = true;

requiredVars.forEach((varName) => {
  if (process.env[varName]) {
    console.log(`   ✅ ${varName}: ${varName.includes('SECRET') ? '***' : process.env[varName]}`);
  } else {
    console.log(`   ❌ ${varName}: NOT SET`);
    allPresent = false;
  }
});

if (!allPresent) {
  console.log('\n❌ Some Cloudinary environment variables are missing!');
  console.log('\n📝 Make sure these are set in Vercel:');
  console.log('   - CLOUDINARY_CLOUD_NAME');
  console.log('   - CLOUDINARY_API_KEY');
  console.log('   - CLOUDINARY_API_SECRET');
  console.log('   - CLOUDINARY_FOLDER');
  process.exit(1);
}

// Configure Cloudinary
console.log('\n2️⃣ Configuring Cloudinary:');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
console.log('   ✅ Configuration applied');

// Test connection by fetching account details
console.log('\n3️⃣ Testing Cloudinary Connection:');
try {
  const result = await cloudinary.api.ping();
  console.log('   ✅ Connection successful!');
  console.log(`   📊 Status: ${result.status}`);
} catch (error) {
  console.error('   ❌ Connection failed:', error.message);
  console.log('\n💡 Possible issues:');
  console.log('   - Invalid API credentials');
  console.log('   - Network connectivity issues');
  console.log('   - Cloudinary service unavailable');
  process.exit(1);
}

// List recent uploads to verify access
console.log('\n4️⃣ Checking Upload Access:');
try {
  const result = await cloudinary.api.resources({
    type: 'upload',
    prefix: process.env.CLOUDINARY_FOLDER,
    max_results: 5
  });
  console.log(`   ✅ Found ${result.resources.length} images in folder "${process.env.CLOUDINARY_FOLDER}"`);
  if (result.resources.length > 0) {
    console.log('\n   📸 Recent images:');
    result.resources.forEach((img, idx) => {
      console.log(`      ${idx + 1}. ${img.public_id} (${img.format}, ${Math.round(img.bytes / 1024)}KB)`);
    });
  }
} catch (error) {
  console.error('   ⚠️  Could not fetch resources:', error.message);
}

console.log('\n✅ Cloudinary is properly configured!');
console.log('\n📝 Next steps for Vercel deployment:');
console.log('   1. Add these environment variables to Vercel (Production & Preview)');
console.log('   2. Make sure values are exactly the same as your .env file');
console.log('   3. Redeploy after adding variables');
console.log('\n🎉 Done!\n');
