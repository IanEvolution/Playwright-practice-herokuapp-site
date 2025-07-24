import { test, expect } from '@playwright/test';

test('disappearing elements', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Disappearing Elements' }).click();
    await page.waitForTimeout(1000);

    const links = page.locator('li');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
        const link = links.nth(i);
        const name = await link.textContent();
        console.log(`link ${i + 1} is labled: ${name}`);
    }

    if (count === 5) {
        console.log('-------------------------------------------------');
        console.log('TEST PASSED');
    } else {
        console.log('-------------------------------------------------');
        console.log('TEST FAILED LINK IS MISSING');


        expect(count, 'A navigation link is missing!').toBe(5);
    }

});

//npx playwright test disappearingElements.spec.js --debug
//npx playwright codegen https://the-internet.herokuapp.com/