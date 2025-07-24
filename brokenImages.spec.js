import { test, expect } from '@playwright/test';

test('broken images', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Broken Images' }).click();
    await page.waitForTimeout(1000);

    const img = page.locator('img');
    const count = await img.count();

    for (let i = 0; i < count; i++) {
        const imageHandle = img.nth(i);
        const width = await imageHandle.evaluate(img => img.naturalWidth);
        const src = await imageHandle.getAttribute('src');
        if (width === 0) {
            console.log(`Image ${i + 1} (${src}) is broken`);
        } else {
            console.log(`Image ${i + 1} (${src}) is NOT broken`);
        }


    }
});

//npx playwright test brokenImages.spec.js --debug
//npx playwright codegen https://the-internet.herokuapp.com/