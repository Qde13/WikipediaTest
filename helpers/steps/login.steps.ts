import { expect, Page } from '@playwright/test';

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

    await page.waitForURL('https://en.wikipedia.org/wiki/Main_Page');

    await page
      .locator('#vector-user-links-dropdown-checkbox')
      .waitFor({ state: 'visible' });
  }
}
