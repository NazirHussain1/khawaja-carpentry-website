#!/usr/bin/env node

/**
 * Check Production Deployment Status
 * Quick check if deployment is ready or having issues
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

async function checkDeployment() {
  log('\n╔═══════════════════════════════════════════════════════╗', 'cyan');
  log('║     Production Deployment Status Check               ║', 'cyan');
  log('╚═══════════════════════════════════════════════════════╝', 'cyan');
  
  log(`\n🌐 Testing: ${PRODUCTION_URL}`, 'cyan');
  
  // Test 1: Homepage
  log('\n1️⃣  Checking Homepage...', 'cyan');
  try {
    const response = await fetch(PRODUCTION_URL);
    const text = await response.text();
    
    if (response.ok) {
      if (text.includes('<!DOCTYPE html') || text.includes('<html')) {
        log('   ✅ Homepage loading (HTML received)', 'green');
      } else {
        log('   ⚠️  Unexpected response format', 'yellow');
      }
    } else {
      log(`   ❌ Homepage returned status ${response.status}`, 'red');
    }
  } catch (error) {
    log(`   ❌ Cannot reach homepage: ${error.message}`, 'red');
  }
  
  // Test 2: Health API
  log('\n2️⃣  Checking API Health Endpoint...', 'cyan');
  try {
    const response = await fetch(`${PRODUCTION_URL}/api/health`);
    const text = await response.text();
    
    if (text.includes('The deployment could not be found')) {
      log('   ❌ DEPLOYMENT NOT FOUND', 'red');
      log('   → Deployment was deleted or never completed', 'yellow');
      log('   → Redeploy the project from Vercel dashboard', 'yellow');
      return 'not-found';
    } else if (text.includes('<!DOCTYPE html') || text.includes('<html')) {
      log('   ❌ Receiving HTML instead of JSON', 'red');
      
      if (text.includes('This deployment is currently building')) {
        log('   → Deployment is BUILDING (in progress)', 'yellow');
        log('   → Wait 2-3 minutes and test again', 'yellow');
        return 'building';
      } else if (text.includes('deployment has failed') || text.includes('Build failed')) {
        log('   → Deployment FAILED', 'red');
        log('   → Check build logs in Vercel dashboard', 'yellow');
        return 'failed';
      } else {
        log('   → Unknown HTML error page', 'yellow');
        log('   → Check Vercel dashboard for details', 'yellow');
        return 'error';
      }
    } else {
      try {
        const data = JSON.parse(text);
        if (data.ok) {
          log('   ✅ API is working correctly!', 'green');
          log(`   → Service: ${data.service}`, 'green');
          return 'ready';
        } else {
          log('   ⚠️  API responded but not OK', 'yellow');
          return 'partial';
        }
      } catch {
        log('   ❌ Invalid JSON response', 'red');
        log(`   → Response: ${text.slice(0, 100)}...`, 'yellow');
        return 'error';
      }
    }
  } catch (error) {
    log(`   ❌ Request failed: ${error.message}`, 'red');
    return 'network-error';
  }
}

async function main() {
  const status = await checkDeployment();
  
  log('\n╔═══════════════════════════════════════════════════════╗', 'cyan');
  log('║     RECOMMENDED ACTIONS                               ║', 'cyan');
  log('╚═══════════════════════════════════════════════════════╝', 'cyan');
  
  switch (status) {
    case 'building':
      log('\n⏳ Deployment is currently BUILDING', 'yellow');
      log('\n📝 Actions:', 'cyan');
      log('   1. Wait 2-3 minutes', 'cyan');
      log('   2. Run this check again:', 'cyan');
      log('      npm run check:deployment', 'green');
      log('   3. Or check Vercel dashboard:', 'cyan');
      log('      https://vercel.com/nazirhussain1s-projects/faisal-fareed-carpentry', 'green');
      break;
      
    case 'failed':
      log('\n❌ Deployment FAILED', 'red');
      log('\n📝 Actions:', 'cyan');
      log('   1. Open Vercel Dashboard:', 'cyan');
      log('      https://vercel.com/nazirhussain1s-projects/faisal-fareed-carpentry', 'green');
      log('   2. Click on the FAILED deployment', 'cyan');
      log('   3. Check "Build Logs" tab for errors', 'cyan');
      log('   4. Common fixes:', 'cyan');
      log('      • Verify all environment variables are set', 'yellow');
      log('      • Check MongoDB URI is correct', 'yellow');
      log('      • Ensure vercel.json is valid', 'yellow');
      log('   5. Click "Redeploy" (without cache)', 'cyan');
      break;
      
    case 'not-found':
      log('\n❌ Deployment NOT FOUND', 'red');
      log('\n📝 Actions:', 'cyan');
      log('   1. Project may need initial deployment', 'cyan');
      log('   2. Connect Git repository in Vercel', 'cyan');
      log('   3. Or push new commit to trigger deployment:', 'cyan');
      log('      git commit --allow-empty -m "Trigger deployment"', 'green');
      log('      git push origin main', 'green');
      break;
      
    case 'ready':
      log('\n✅ Deployment is READY!', 'green');
      log('\n📝 Next steps:', 'cyan');
      log('   1. Test admin panel functionality:', 'cyan');
      log('      npm run test:vercel-env', 'green');
      log('   2. Or login directly:', 'cyan');
      log('      https://faisal-fareed-carpentry.vercel.app/admin', 'green');
      log('      Username: Nazir', 'cyan');
      log('      Password: @Nazir9697', 'cyan');
      break;
      
    default:
      log('\n⚠️  Deployment status unclear', 'yellow');
      log('\n📝 Actions:', 'cyan');
      log('   1. Check Vercel Dashboard:', 'cyan');
      log('      https://vercel.com/nazirhussain1s-projects/faisal-fareed-carpentry', 'green');
      log('   2. Look at latest deployment status', 'cyan');
      log('   3. If green (Ready), wait 1-2 minutes for DNS', 'cyan');
      log('   4. If red (Failed), check build logs', 'cyan');
  }
  
  log('');
  
  process.exit(status === 'ready' ? 0 : 1);
}

main().catch(error => {
  log(`\n❌ Check failed: ${error.message}`, 'red');
  process.exit(1);
});
