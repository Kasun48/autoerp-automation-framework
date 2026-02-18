import { test } from '@playwright/test';
import { LoginPage } from './login.page';

test('@smoke @regression Login with valid credentials', async ({ page }) => {
  console.log("USERNAME =", process.env.AUTOERP_USERNAME);
  console.log("PASSWORD =", process.env.AUTOERP_PASSWORD);

  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(process.env.AUTOERP_USERNAME!, process.env.AUTOERP_PASSWORD!);
  await loginPage.verifyLoginSuccess();
});
