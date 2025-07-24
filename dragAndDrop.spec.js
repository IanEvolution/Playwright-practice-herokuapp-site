import { test, expect } from '@playwright/test';

test('drag and drop', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');

    await page.getByRole('link', { name: 'Drag and Drop' }).click();

    console.log('--------------------------------------------------------');
    console.log('ROUND 1')
    const containers = page.locator('.column');
    const count = await containers.count();
    for (let i = 0; i < count; i++) {
        const container = containers.nth(i);
        const contName = await container.textContent();
        console.log(`container ${i + 1} is: ${contName}`);
    }
    
    await page.locator('#column-a').dragTo(page.locator('#column-b'));
    console.log('--------------------------------------------------------');
    console.log('ROUND 2');

    for (let i = 0; i < count; i++) {
        const container = containers.nth(i);
        const contName = await container.textContent();
        console.log(`container ${i + 1} is: ${contName}`);
    }

});


//npx playwright test dragAndDrop.spec.js --debug
//npx playwright codegen https://the-internet.herokuapp.com/