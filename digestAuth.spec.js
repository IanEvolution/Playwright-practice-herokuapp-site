import { test, expect } from '@playwright/test';

test('digest auth', async({browser}) => {
    const context = await browser.newContext({
        httpCredentials: {
            username: 'admin', 
            password: 'admin'
        }
    });

    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Digest Authentication' }).click();
    await page.waitForTimeout(1000);

    await expect(page.locator('p')).toContainText('Congratulations!');
});



//npx playwright test digestAuth.spec.js --debug
//npx playwright codegen https://the-internet.herokuapp.com/