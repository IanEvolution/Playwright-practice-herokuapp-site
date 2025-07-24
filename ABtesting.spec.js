import { test, expect } from '@playwright/test';

test('test', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'A/B Testing' }).click();

    const heading = await page.locator('h3').textContent();
    expect(['A/B Test Variation 1', 'A/B Test Control']).toContain(heading.trim());
    console.log(heading);
});

//npx playwright test ABtesting.spec.js --debug
//npx playwright codegen https://the-internet.herokuapp.com/