import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Capture failed requests
  const failedRequests = [];
  page.on('requestfailed', request => {
    failedRequests.push({
      url: request.url(),
      failure: request.failure()
    });
  });

  const url = 'https://Nobabkh.github.io/portfolio/';
  console.log('🔍 Debugging:', url);

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

    console.log('\n❌ Failed Requests:');
    if (failedRequests.length === 0) {
      console.log('  None ✅');
    } else {
      failedRequests.forEach((req, i) => {
        console.log(`  ${i + 1}. ${req.url}`);
        console.log(`     Error: ${req.failure?.errorText}`);
      });
    }

    console.log('\n📊 All Resources:');
    const responses = await page.evaluate(() => {
      return performance.getEntriesByType('resource').map(r => ({
        name: r.name,
        duration: r.duration,
        size: r.transferSize
      }));
    });

    responses.forEach((r, i) => {
      const status = r.transferSize > 0 ? '✅' : '❌';
      console.log(`  ${status} ${r.name.split('/').pop()} (${r.transferSize} bytes)`);
    });

    // Check React rendering
    const reactState = await page.evaluate(() => {
      const root = document.getElementById('root');
      return {
        rootChildren: root?.childElementCount || 0,
        rootHTML: root?.innerHTML.substring(0, 500) || '',
        bodyChildren: document.body.childElementCount
      };
    });

    console.log('\n🎯 React State:');
    console.log('  Root children:', reactState.rootChildren);
    console.log('  Body children:', reactState.bodyChildren);
    console.log('  Root HTML preview:', reactState.rootHTML.substring(0, 200));

    // Check if there's a 404 redirect
    const currentUrl = page.url();
    console.log('\n🌐 Current URL:', currentUrl);

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();
