import { test, expect } from '@playwright/test';

test('test', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/')
    await page.getByRole('link', { name: 'Add/Remove Elements' }).click();

    const click = 5;
    for(let i = 0; i < click; i++) {
        const add = await page.getByRole('button', { name: 'Add Element' }).click(click);
    }
    console.log(`Add Element was clicked: ${click} times`);
    
    const deletes = await page.locator('.added-manually').count();
    console.log(`Number of deletes: ${deletes}`)
    expect(deletes).toBe(click);


});


//npx playwright test AddRemoveElements.spec.js --debug
//npx playwright codegen https://the-internet.herokuapp.com/