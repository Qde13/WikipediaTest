import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import { LoginSteps } from '../helpers/steps/login.steps';
import { PreferencesSteps } from '../helpers/steps/preferences.steps';
import { NavigationSteps } from '../helpers/steps/navigation.steps';
dotenv.config();

test('Authorized user can change language to Ukrainian', async ({ page }) => {
  await NavigationSteps.goToHomePageByUrl(page);
  await LoginSteps.login(page);
  await NavigationSteps.goToPreferencesByUi(page);
  await PreferencesSteps.changeLanguage(page, 'en - English');

  await expect(page.locator('h1#firstHeading')).toHaveText('Preferences');

  await NavigationSteps.goToPreferencesByUi(page);
  await PreferencesSteps.changeLanguage(page, 'uk - українська');

  await expect(page.locator('h1#firstHeading')).toHaveText('Налаштування');
});
