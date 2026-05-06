import { test, expect } from '@playwright/test';

test.describe('Mock Smoke Test @smoke', () => {
  test('should validate mocked homepage', async ({ page }) => {
    await page.route('**/*', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'text/html',
        body: `
          <!DOCTYPE html>
          <html>
            <body>
              <main>
                <h1>Mock Amazon Homepage</h1>

                <input
                  type="text"
                  aria-label="Buscar en Amazon"
                />

                <button>
                  Buscar
                </button>
              </main>
            </body>
          </html>
        `
      });
    });

    await page.goto('https://www.amazon.com');

    await expect(
      page.getByRole('heading', {
        name: /mock amazon homepage/i
      })
    ).toBeVisible();

    await expect(
      page.getByRole('textbox')
    ).toBeVisible();

    await expect(
      page.getByRole('button', {
        name: /buscar/i
      })
    ).toBeVisible();
  });
});
