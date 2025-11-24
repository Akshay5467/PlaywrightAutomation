import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

test('Login page test', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.enterUsername('akshay.khatode+3@simplifyvms.com');
  await login.enterPassword('Akshay@1234');
  await login.signIn();

  // Assert the URL is the dashboard
await expect(page).toHaveURL(/.*\/dashboard/);

});
