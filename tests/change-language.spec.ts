import { test, expect } from '@playwright/test';
import { LoginSteps } from '../helpers/steps/login.steps';
import { PreferencesSteps } from '../helpers/steps/preferences.steps';
import { NavigationSteps } from '../helpers/steps/navigation.steps';

test('Authorized user can change language to Ukrainian', async ({ page }) => {
  const preferencesHeader = page.locator('h1#firstHeading');

  await test.step(`Open the 'Wikipedia' homepage`, async () => {
    await NavigationSteps.goToHomePageByUrl(page);
  });
  await test.step(`Log in with the valid credentials`, async () => {
    await LoginSteps.login(page);
  });
  await test.step(`Open the 'Preferences' section via user menu`, async () => {
    await NavigationSteps.goToPreferencesByUi(page);
  });
  await test.step(`Change language to English if necessary`, async () => {
    await PreferencesSteps.changeLanguage(page, 'en - English');
  });

  await expect(
    preferencesHeader,
    'Check that the language is set to English',
  ).toHaveText('Preferences');

  await test.step(`Open the 'Preferences' section via user menu`, async () => {
    await NavigationSteps.goToPreferencesByUi(page);
  });
  await test.step(`Change language from English to Ukrainian`, async () => {
    await PreferencesSteps.changeLanguage(page, 'uk - українська');
  });

  await expect(
    preferencesHeader,
    'Check that the language is set to Ukrainian',
  ).toHaveText('Налаштування');
});
