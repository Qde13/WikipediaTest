import { expect, Page } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export class LoginSteps {
  static async login(
    page: Page,
    username: string = process.env.USER_NAME!,
    password: string = process.env.PASSWORD!,
  ) {
    await page.locator('li#pt-login-2').click();
    await page.getByPlaceholder('Enter your username').fill(username);
    await page.getByPlaceholder('Enter your password').fill(password);
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(
      page.locator('#vector-user-links-dropdown-checkbox'),
    ).toBeVisible();
  }
}
