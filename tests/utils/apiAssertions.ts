import { expect } from '@playwright/test';

type Product = {
  id: string;
  name: string;
  price: number;
  available: boolean;
};

export function expectValidProduct(product: Product) {
  expect(product.id).toBeTruthy();
  expect(product.name).toBeTruthy();
  expect(product.price).toBeGreaterThan(0);
  expect(typeof product.available).toBe('boolean');
}
