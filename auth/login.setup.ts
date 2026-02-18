import { test as setup } from '@playwright/test';
import { LoginPage } from '../domains/login/login.page';

setup('Global Login Setup', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(
    process.env.AUTOERP_USERNAME!,
    process.env.AUTOERP_PASSWORD!
  );
  await loginPage.verifyLoginSuccess();

  // create file here
  await page.context().storageState({
    path: 'auth/storageState.json'
  });
});
