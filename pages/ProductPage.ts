import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private readonly page: Page) {}

  async expectLoaded() {
    await expect(
      this.page.locator('span#productTitle')
    ).toBeVisible();
  }

  async addToCart() {
    await this.page.getByRole('button', {
      name: /agregar al carrito|add to cart/i
    }).click();
  }
}
