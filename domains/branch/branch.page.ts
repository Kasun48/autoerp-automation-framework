import { Page } from '@playwright/test';

export class BranchPage {
  constructor(private page: Page) {}

  async openList() {
    await this.page.goto('/branches');
  }

  async openCreate() {
    await this.page.goto('/branches/create');
  }

  async createBranch(branch: any) {
    await this.page.fill('input[name="branchName"]', branch.name);
    await this.page.fill('input[name="city"]', branch.city);
    await this.page.click('button[type="submit"]');
  }

  async verifyBranchCreated(name: string) {
    await this.page.locator(`text=${name}`).waitFor();
  }
}
