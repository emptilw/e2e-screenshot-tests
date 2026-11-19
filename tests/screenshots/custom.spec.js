// tests/screenshots/custom.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Власні Screenshot тести для сторінки shop.html', () => {
    test('Screenshot 1: Візуальна перевірка всієї сторінки замовлення', async ({ page }) => {
        await page.goto('http://localhost:3000/shop.html');
        expect(await page.screenshot()).toMatchSnapshot('shop-full-page.png');
    });

    test('Screenshot 2: Візуальна перевірка заголовка сторінки замовлення', async ({ page }) => {
        await page.goto('http://localhost:3000/shop.html');
        const heading = page.locator('#pageTitle');
        expect(await heading.screenshot()).toMatchSnapshot('shop-heading.png');
    });
});