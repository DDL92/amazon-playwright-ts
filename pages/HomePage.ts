import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/?language=es_US');
    await this.handleInitialPopups();
  }

  async expectLoaded() {
    await expect(
      this.page.getByRole('searchbox', { name: /buscar en amazon/i })
    ).toBeVisible();
  }

  async search(product: string) {
    const searchInput = this.page.getByRole('searchbox', {
      name: /buscar en amazon/i
    });

    await searchInput.fill(product);
    await searchInput.press('Enter');

    await expect(this.page).toHaveURL(/s\?/);
  }

  // 🔥 Anti-flaky handler
  private async handleInitialPopups() {
    const continueBtn = this.page.getByRole('button', {
      name: /continuar/i
    });

    if (await continueBtn.isVisible().catch(() => false)) {
      await continueBtn.click();
    }
  }
}
