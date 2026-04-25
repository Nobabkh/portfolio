import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const url = 'https://Nobabkh.github.io/portfolio/';

  console.log('🔍 Checking portfolio at:', url);

  try {
    const response = await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    console.log('📊 Response status:', response?.status());
    console.log('📄 Page title:', await page.title());

    // Check for 404
    if (response?.status() === 404) {
      console.log('❌ 404 Error detected!');
      console.log('📄 Page content preview:');
      const bodyText = await page.body();
      console.log(bodyText.toString().substring(0, 500));
    } else {
      console.log('✅ Page loaded successfully!');

      // Check for main elements
      const heroExists = await page.locator('.hero-section').count();
      const beeExists = await page.locator('.bee').count();
      const projectsExist = await page.locator('.project-card').count();

      console.log('🎯 Hero section:', heroExists > 0 ? '✅ Found' : '❌ Missing');
      console.log('🐝 Bee element:', beeExists > 0 ? '✅ Found' : '❌ Missing');
      console.log('📦 Project cards:', projectsExist);

      // Take a screenshot
      await page.screenshot({ path: 'portfolio-screenshot.png', fullPage: true });
      console.log('📸 Screenshot saved as portfolio-screenshot.png');

      // Check console for errors
      const errors = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });

      // Wait a bit to capture any errors
      await page.waitForTimeout(3000);

      if (errors.length > 0) {
        console.log('⚠️  Console errors found:');
        errors.forEach((error, i) => {
          console.log(`  ${i + 1}. ${error}`);
        });
      } else {
        console.log('✅ No console errors');
      }

      // Check if content is visible
      const heroTitle = await page.locator('.hero-title').textContent();
      console.log('📝 Hero title:', heroTitle?.substring(0, 50) || 'Not found');

      const projectTitles = await page.locator('.project-title').allTextContents();
      console.log('📦 Projects found:', projectTitles.length);
      projectTitles.forEach((title, i) => {
        console.log(`  ${i + 1}. ${title}`);
      });
    }
  } catch (error) {
    console.error('❌ Error checking portfolio:', error.message);
  } finally {
    await browser.close();
  }
})();
