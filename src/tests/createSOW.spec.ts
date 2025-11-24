import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { SOWMenu } from '../pages/CreateSOW';

test('Just click SOW sidebar', async ({ page }) => {
  // Login steps
  const login = new LoginPage(page);
  await login.goto();
  await login.enterUsername('akshay.khatode+3@simplifyvms.com');
  await login.enterPassword('Akshay@1234');
  await login.signIn();

  // Only click parent SOW sidebar menu
  const sowMenu = new SOWMenu(page);
  await sowMenu.clickParentSOWSidebar();
  // No further actions
});
