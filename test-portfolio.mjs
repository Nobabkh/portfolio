import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  // Capture console errors
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  // Capture page errors
  page.on('pageerror', error => {
    console.error('Page error:', error.message);
  });

  const url = 'https://Nobabkh.github.io/portfolio/';
  console.log('🔍 Loading:', url);

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

    console.log('✅ Page loaded');
    console.log('📄 Title:', await page.title());

    // Wait for React to mount
    await page.waitForTimeout(3000);

    // Take a screenshot
    await page.screenshot({ path: 'portfolio-test.png', fullPage: true });
    console.log('📸 Screenshot saved: portfolio-test.png');

    // Check for content
    const bodyText = await page.evaluate(() => document.body.innerText);
    console.log('📝 Body text preview:', bodyText.substring(0, 200));

    // Check for specific elements
    const root = await page.locator('#root').count();
    console.log('🎯 Root element:', root > 0 ? '✅ Found' : '❌ Missing');

    const hero = await page.locator('.hero-section, .hero').count();
    console.log('🦸 Hero section:', hero > 0 ? '✅ Found' : '❌ Missing');

    const projects = await page.locator('.project-card, .project').count();
    console.log('📦 Projects:', projects);

    const bee = await page.locator('.bee').count();
    console.log('🐝 Bee element:', bee > 0 ? '✅ Found' : '❌ Missing');

    // Check computed styles
    const rootStyle = await page.evaluate(() => {
      const root = document.getElementById('root');
      if (!root) return null;
      const computed = window.getComputedStyle(root);
      return {
        display: computed.display,
        height: computed.height,
        background: computed.background
      };
    });
    console.log('🎨 Root styles:', JSON.stringify(rootStyle, null, 2));

    // Check for console errors
    if (consoleErrors.length > 0) {
      console.log('⚠️ Console errors found:');
      consoleErrors.forEach((err, i) => console.log(`  ${i + 1}. ${err}`));
    } else {
      console.log('✅ No console errors');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();
