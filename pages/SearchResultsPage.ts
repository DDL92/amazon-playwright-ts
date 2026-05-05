import { Page, expect } from '@playwright/test';

export class SearchResultsPage {
  constructor(private readonly page: Page) {}

  async expectResultsPageLoaded() {
    await expect(this.page).toHaveURL(/s\?/);
    await expect(this.page.locator('[data-component-type="s-search-result"]').first()).toBeVisible();
  }

  async openFirstProduct() {
    await this.page
      .locator('[data-component-type="s-search-result"]')
      .first()
      .getByRole('link')
      .first()
      .click();
  }
}