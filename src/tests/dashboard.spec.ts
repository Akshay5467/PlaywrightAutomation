import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { DashboardPage } from '../pages/Dashboard';

test('When SOW Pending client review & Pending approval is present', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.enterUsername('akshay.khatode+3@simplifyvms.com');
  await login.enterPassword('Akshay@1234');
  await login.signIn();

  const dashboard = new DashboardPage(page);
  await dashboard.assertOnDashboard();
  await dashboard.clickPendingSOWCard();
});
