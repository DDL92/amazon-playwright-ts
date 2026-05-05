import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private readonly page: Page) {}

  async getProductTitle(): Promise<string> {
    const title = this.page.locator('span#productTitle');
    await expect(title).toBeVisible();
    return (await title.textContent())?.trim() || '';
  }

  async addToCart() {
    await this.page.getByRole('button', {
      name: /agregar al carrito|add to cart/i
    }).click();
  }
}
