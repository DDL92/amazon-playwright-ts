import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 3 : undefined,
  timeout: 45_000,
  expect: {
    timeout: 10_000
  },
  reporter: [
  ['html', { open: 'never' }],
  ['junit', { outputFile: 'test-results/results.xml' }],
  ['allure-playwright']],
  use: {
    baseURL: process.env.BASE_URL ?? 'https://www.amazon.com',
    locale: 'es-US',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});