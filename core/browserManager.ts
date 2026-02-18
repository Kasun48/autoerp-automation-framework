import { chromium, Browser, Page } from '@playwright/test';

export class BrowserManager {
  static async launch(): Promise<{ browser: Browser; page: Page }> {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();
    return { browser, page };
  }
}
