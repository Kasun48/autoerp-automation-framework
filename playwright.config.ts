import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  timeout: 60000,

  projects: [
    // 1️⃣ Setup project (creates storageState.json)
    {
      name: 'setup',
      testMatch: /auth\/login\.setup\.ts/,
      use: {
        baseURL: process.env.BASE_URL,
        headless: false
      }
    },

    // 2️⃣ Main test project (uses storageState.json)
    {
      name: 'tests',
      dependencies: ['setup'],
      use: {
        baseURL: process.env.BASE_URL,
        storageState: 'auth/storageState.json',
        headless: false,
        slowMo: 200,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        launchOptions: {
        args: [
          '--disable-autofill',
          '--disable-password-manager-reauthentication',
          '--disable-save-password-bubble'
        ]
       }
      }
    }
  ]
});
