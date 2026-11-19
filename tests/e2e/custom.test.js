// tests/e2e/custom.test.js
const { test, expect } = require('@playwright/test');

test.describe('Власні E2E тести (сторінка shop.html та документація Playwright)', () => {
    test('E2E 1: Перевірка заголовка та кнопки на сторінці shop.html', async ({ page }) => {
        await page.goto('http://localhost:3000/shop.html');
        await expect(page).toHaveTitle(/Магазин техніки/);
        await expect(page.locator('#pageTitle')).toHaveText('Оформлення замовлення');
        await expect(page.locator('#orderBtn')).toBeVisible();
    });

    test('E2E 2: Успішне оформлення замовлення на сторінці shop.html', async ({ page }) => {
        await page.goto('http://localhost:3000/shop.html');
        await page.fill('#customerName', 'Анжеліка');
        await page.fill('#quantity', '2');
        await page.click('#orderBtn');
        await expect(page.locator('#orderStatus')).toBeVisible();
        await expect(page.locator('#orderStatus')).toHaveText('Замовлення успішно оформлено!');
    });

    test('E2E 3: Перевірка заголовка розділу Installation на зовнішньому сайті', async ({ page }) => {
        await page.goto('https://playwright.dev/docs/intro');
        await expect(page).toHaveTitle(/Installation/);
        await expect(page.locator('h1')).toHaveText('Installation');
    });

    test('E2E 4: Перевірка переходу до розділу Writing tests на зовнішньому сайті', async ({ page }) => {
        await page.goto('https://playwright.dev/docs/intro');
        const nextLink = page.locator('a.pagination-nav__link--next');
        await expect(nextLink).toBeVisible();
        await nextLink.click();
        await expect(page).toHaveURL(/docs\/writing-tests/);
    });
});