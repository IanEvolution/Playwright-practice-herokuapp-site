import { test, expect } from '@playwright/test';

test('context menu', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Context Menu' }).click();
    await page.waitForTimeout(1000);

    page.once('dialog', async dialog => {expect(dialog.message()).toBe('You selected a context menu')
        await dialog.accept();
    });

    await page.locator('#hot-spot').click({button: 'right'});
})


//npx playwright test contextMenu.spec.js --debug
//npx playwright codegen https://the-internet.herokuapp.com/