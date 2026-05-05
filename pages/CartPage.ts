import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async expectItemAdded() {
    await expect(
      this.page.getByRole('heading', { name: /agregado al carrito|added to cart/i })
    ).toBeVisible();
  }

  async expectCartQuantity(quantity: number) {
    await expect(
      this.page.getByRole('link', {
        name: new RegExp(`${quantity} artículo en el carrito|${quantity} item in cart`, 'i')
      })
    ).toBeVisible();
  }
}
