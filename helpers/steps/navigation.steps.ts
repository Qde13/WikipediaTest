import { expect, Page } from '@playwright/test';

export class NavigationSteps {
  static async goToHomePageByUrl(page: Page) {
    await page.goto('https://en.wikipedia.org/');
  }

  static async goToPreferencesByUi(page: Page) {
    const preferencesLink = page.locator('#pt-preferences a');
    const profileButton = page.locator('#vector-user-links-dropdown-checkbox');

    const openMenuAndClickPreferences = async () => {
      await profileButton.click();

      await Promise.all([
        page.waitForURL(/Special:Preferences/),
        preferencesLink.click(),
      ]);
    };

    try {
      await openMenuAndClickPreferences();
    } catch {
      await page.keyboard.press('Escape');

      await openMenuAndClickPreferences();
    }

    await expect(page.locator('form#mw-prefs-form')).toBeVisible();
  }
}
