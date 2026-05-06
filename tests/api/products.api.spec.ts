import { test, expect } from '@playwright/test';
import { productsApiMock } from '../../mocks/products.api.mock';
import { expectValidProduct } from '../utils/apiAssertions';

test.describe('Products API @api @regression', () => {
  test('should return valid product list', async ({ request }) => {
    // Arrange
    const responseBody = productsApiMock;

    // Act
    const products = responseBody.products;

    // Assert
    expect(products).toHaveLength(2);

    for (const product of products) {
      expectValidProduct(product);
    }
  });
});
