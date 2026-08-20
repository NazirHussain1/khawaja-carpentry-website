#!/usr/bin/env node

/**
 * Quick Vercel Environment Variables Test
 * Tests if production has the required env vars configured
 */

const PRODUCTION_URL = 'https://faisal-fareed-carpentry.vercel.app';

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function testHealth() {
  log('\n🔍 Testing Production Health...', 'cyan');
  
  try {
    const response = await fetch(`${PRODUCTION_URL}/api/health`);
    const data = await response.json();
    
    if (response.ok && data.ok) {
      log('✅ API is online', 'green');
      return true;
    } else {
      log('❌ API health check failed', 'red');
      return false;
    }
  } catch (error) {
    log(`❌ Cannot reach production: ${error.message}`, 'red');
    return false;
  }
}

async function testAdminAuth() {
  log('\n🔐 Testing Admin Authentication...', 'cyan');
  
  const credentials = Buffer.from('Nazir:@Nazir9697').toString('base64');
  
  try {
    const response = await fetch(`${PRODUCTION_URL}/api/admin/inquiries`, {
      headers: {
        'Authorization': `Basic ${credentials}`
      }
    });
    
    const data = await response.json();
    
    if (response.status === 401) {
      log('❌ Authentication Failed', 'red');
      log('   Reason: Admin credentials not configured or incorrect', 'yellow');
      log('   Missing: ADMIN_USERNAME and/or ADMIN_PASSWORD', 'yellow');
      return { success: false, issue: 'auth' };
    } else if (response.status === 503) {
      log('⚠️  Authentication OK but Service Unavailable', 'yellow');
      log('   Reason: MongoDB connection failed', 'yellow');
      log('   Missing: MONGODB_URI or MONGODB_DB', 'yellow');
      return { success: false, issue: 'database' };
    } else if (response.ok) {
      log('✅ Admin authentication working!', 'green');
      log(`   Found ${data.totals?.all || 0} total inquiries`, 'green');
      return { success: true };
    } else {
      log(`❌ Unexpected error: ${response.status}`, 'red');
      log(`   Message: ${data.message || 'Unknown error'}`, 'yellow');
      return { success: false, issue: 'unknown' };
    }
  } catch (error) {
    log(`❌ Request failed: ${error.message}`, 'red');
    return { success: false, issue: 'network' };
  }
}

async function testProducts() {
  log('\n📦 Testing Products API...', 'cyan');
  
  try {
    const response = await fetch(`${PRODUCTION_URL}/api/products`);
    const data = await response.json();
    
    if (response.ok && data.products) {
      log(`✅ Products API working (${data.products.length} products)`, 'green');
      return true;
    } else {
      log('❌ Products API failed', 'red');
      return false;
    }
  } catch (error) {
    log(`❌ Products request failed: ${error.message}`, 'red');
    return false;
  }
}

async function testMedia() {
  log('\n🖼️  Testing Media Library...', 'cyan');
  
  const credentials = Buffer.from('Nazir:@Nazir9697').toString('base64');
  
  try {
    const response = await fetch(`${PRODUCTION_URL}/api/admin/media`, {
      headers: {
        'Authorization': `Basic ${credentials}`
      }
    });
    
    const data = await response.json();
    
    if (response.ok && data.media) {
      log(`✅ Media library accessible (${data.media.length} items)`, 'green');
      
      if (data.media.length === 0) {
        log('   ℹ️  No images uploaded yet (this is OK)', 'cyan');
      }
      
      return true;
    } else if (response.status === 503) {
      log('❌ Media library unavailable', 'red');
      log('   Reason: Cloudinary not configured', 'yellow');
      log('   Missing: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET', 'yellow');
      return false;
    } else {
      log('❌ Media library failed', 'red');
      return false;
    }
  } catch (error) {
    log(`❌ Media request failed: ${error.message}`, 'red');
    return false;
  }
}

async function main() {
  log('\n╔═══════════════════════════════════════════════════════╗', 'cyan');
  log('║     Vercel Environment Variables Test                 ║', 'cyan');
  log('║     Production: faisal-fareed-carpentry               ║', 'cyan');
  log('╚═══════════════════════════════════════════════════════╝', 'cyan');
  
  const results = {
    health: await testHealth(),
    auth: await testAdminAuth(),
    products: await testProducts(),
    media: await testMedia()
  };
  
  log('\n╔═══════════════════════════════════════════════════════╗', 'cyan');
  log('║     TEST RESULTS SUMMARY                              ║', 'cyan');
  log('╚═══════════════════════════════════════════════════════╝', 'cyan');
  
  const working = [];
  const broken = [];
  
  if (results.health) working.push('API Health');
  else broken.push('API Health');
  
  if (results.auth.success) working.push('Admin Auth');
  else broken.push('Admin Auth');
  
  if (results.products) working.push('Products API');
  else broken.push('Products API');
  
  if (results.media) working.push('Media Library');
  else broken.push('Media Library');
  
  if (working.length > 0) {
    log(`\n✅ Working (${working.length}/4):`, 'green');
    working.forEach(item => log(`   • ${item}`, 'green'));
  }
  
  if (broken.length > 0) {
    log(`\n❌ Broken (${broken.length}/4):`, 'red');
    broken.forEach(item => log(`   • ${item}`, 'red'));
  }
  
  // Specific recommendations
  if (!results.auth.success) {
    log('\n🔧 REQUIRED ACTIONS:', 'yellow');
    log('   1. Open: https://vercel.com/nazirhussain1s-projects/faisal-fareed-carpentry/settings/environment-variables', 'cyan');
    
    if (results.auth.issue === 'auth') {
      log('   2. Add these variables for Production:', 'cyan');
      log('      • ADMIN_USERNAME = Nazir', 'cyan');
      log('      • ADMIN_PASSWORD = @Nazir9697', 'cyan');
    } else if (results.auth.issue === 'database') {
      log('   2. Add these variables for Production:', 'cyan');
      log('      • MONGODB_URI = mongodb+srv://Nazir:%40Nazir521315@cluster0.9plm9ji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 'cyan');
      log('      • MONGODB_DB = khawaja_carpentry', 'cyan');
    }
    
    if (!results.media) {
      log('   3. Add Cloudinary variables:', 'cyan');
      log('      • CLOUDINARY_CLOUD_NAME = dqrldug5h', 'cyan');
      log('      • CLOUDINARY_API_KEY = 353911612528378', 'cyan');
      log('      • CLOUDINARY_API_SECRET = Fo5ZNkmessqLLRq6Ucm3WFJDT8U', 'cyan');
    }
    
    log('   4. Redeploy project (without cache)', 'cyan');
    log('   5. Run this test again: npm run test:vercel-env', 'cyan');
  } else {
    log('\n🎉 All systems operational!', 'green');
    log(`   Admin Panel: ${PRODUCTION_URL}/admin`, 'green');
    log('   Username: Nazir', 'cyan');
    log('   Password: @Nazir9697', 'cyan');
  }
  
  log('');
  
  process.exit(broken.length > 0 ? 1 : 0);
}

main().catch(error => {
  log(`\n❌ Test failed: ${error.message}`, 'red');
  process.exit(1);
});
