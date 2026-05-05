import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async expectItemAdded() {
    await expect(this.page.getByText(/added to cart|agregado al carrito/i).first()).toBeVisible();
  }
}
