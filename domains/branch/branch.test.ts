import { test, expect } from '@playwright/test';
import { BranchPage } from './branch.page';
import { DataFactory } from '../../core/dataFactory';

test('Create Branch', async ({ page }) => {
  const branchPage = new BranchPage(page);
  const branch = DataFactory.createBranch();

  await branchPage.openCreate();
  await branchPage.createBranch(branch);
  await branchPage.verifyBranchCreated(branch.name);

  expect(await page.isVisible(`text=${branch.name}`)).toBeTruthy();
});
