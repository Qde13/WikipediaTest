import { expect, Page } from '@playwright/test';

export class NavigationSteps {
  static async goToHomePageByUrl(page: Page) {
    await page.goto('https://en.wikipedia.org/');
  }

  static async goToPreferencesByUi(page: Page) {
    await page.locator('#vector-user-links-dropdown-checkbox').click();
    const preferencesLink = page.locator('#pt-preferences a');

    await preferencesLink.scrollIntoViewIfNeeded();
    await preferencesLink.waitFor({ state: 'visible' });
    await preferencesLink.click({ force: true });
    await expect(page.locator('form#mw-prefs-form')).toBeVisible();
  }
}
