import { expect, Page } from '@playwright/test';

export class PreferencesSteps {
  static async changeLanguage(page: Page, language: string) {
    const preferencesForm = page.locator('form#mw-prefs-form');
    const languageSelector = preferencesForm.locator('div#mw-input-wplanguage');
    const saveButton = preferencesForm.locator('button[type="submit"]');

    const currentLanguage: string | null = await languageSelector
      .getByRole('combobox')
      .getByRole('textbox')
      .textContent();

    if (currentLanguage?.trim() === language) {
      await expect(saveButton).toBeDisabled();
    } else {
      await languageSelector.click();
      await page.getByRole('option').getByText(language).click();

      await expect(saveButton).toBeEnabled();
      await saveButton.click();
    }
  }
}
