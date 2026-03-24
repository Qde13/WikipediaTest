import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
dotenv.config();

test('Check that language can be changed', async ({ page }) => {
  const saveButton = page.locator('button[type="submit"]');
  const username: string = process.env.USERNAME!;
  const password: string = process.env.PASSWORD!;
  const usernameInput = page.getByPlaceholder('Enter your username');
  const passwordInput = page.getByPlaceholder('Enter your password');

  await page.goto('https://en.wikipedia.org/');

  await expect(page).toHaveTitle(/Wikipedia/);

  await page.locator('li#pt-login-2').click();
  await usernameInput.fill(username);
  await passwordInput.fill(password);
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.locator('#vector-user-links-dropdown-checkbox').click();
  await page.locator('li#pt-preferences').click();

  await page.locator('select[name="wplanguage"]').selectOption('en');
  await saveButton.click();

  await page.locator('#vector-user-links-dropdown-checkbox').click();
  await page.locator('li#pt-preferences').click();

  await page.locator('select[name="wplanguage"]').selectOption('uk');

  await expect(saveButton).toBeEnabled();
  await saveButton.click();

  await expect(page.locator('h1#firstHeading')).toHaveText('Налаштування');
});
