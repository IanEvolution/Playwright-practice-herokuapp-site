import { test, expect } from '@playwright/test';

test('check boxes', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Checkboxes' }).click();
    await page.waitForTimeout(1000);

    //check the curect check box status
    const checkBoxes = page.locator('#checkboxes input[type="checkbox"]');
    const count = await checkBoxes.count();

    console.log('');
    console.log('-----ROUND ONE-----');

    for (let i = 0; i < count; i++) {
        const checkBox = checkBoxes.nth(i);
        const checkBoxStatus = await checkBox.isChecked();
        console.log(`Check box ${i + 1} is ${checkBoxStatus ? 'checked' : 'NOT checked'}`);
    }

    //click in them
    for (let i = 0; i < count; i++) {
        const checkBox = checkBoxes.nth(i);
        await checkBox.click();
    }

    //recheck the status
    console.log('');
    console.log('-----ROUND TWO-----');

    for (let i = 0; i < count; i++) {
        const checkBox = checkBoxes.nth(i);
        const checkBoxStatus = await checkBox.isChecked();
        console.log(`Check box ${i + 1} is ${checkBoxStatus ? 'checked' : 'NOT checked'}`);
    }
})

//npx playwright test checkBoxes.spec.js --debug
//npx playwright codegen https://the-internet.herokuapp.com/