import { test, expect } from 'playwright/test';

test('challenging DOM', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/')
    await page.getByRole('link', { name: 'Challenging DOM' }).click();
    await page.waitForTimeout(1000);

    const buttons = page.locator('.button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
        const btn = buttons.nth(i);
        const text = await btn.textContent();
        await btn.click();
        expect(text).toMatch(/qux|baz|bar|foo/);
    }

    const editLinks = page.locator('a:has-text("edit")');
    const editCount = await editLinks.count();

    for (let i = 0; i < editCount; i++) {
        const editLink = editLinks.nth(i);
        const row = editLink.locator('xpath=ancestor::tr');
        const firstCell = await row.locator('td').first().textContent();
        await editLink.click();
        console.log(`For row ${i + 1} the first cell attribute is: ${firstCell}`);
    }
});

//npx playwright test challengingDOM.spec.js --debug
//npx playwright codegen https://the-internet.herokuapp.com/