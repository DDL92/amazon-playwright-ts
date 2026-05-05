import { test } from '../../fixtures/test.fixture';
import { products } from '../../utils/testData';

test.describe('Amazon Search @smoke', () => {
  test('should search for a product successfully', async ({
    homePage,
    searchResultsPage
  }) => {
    await homePage.goto();
    await homePage.expectLoaded();

    await homePage.search(products.smokeSearch);

    await searchResultsPage.expectResultsPageLoaded();
  });
});
