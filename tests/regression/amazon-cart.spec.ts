import { test } from '../../fixtures/test.fixture';
import { products } from '../../utils/testData';

test.describe('Amazon Cart @regression', () => {
  test('should add first product to cart', async ({
    homePage,
    searchResultsPage,
    productPage,
    cartPage
  }) => {
    await homePage.goto();
    await homePage.expectLoaded();

    await homePage.search(products.regressionSearch);
    await searchResultsPage.expectResultsPageLoaded();

    await searchResultsPage.openFirstProduct();
    await productPage.expectLoaded();

    await productPage.addToCart();

    await cartPage.expectItemAdded();
  });
});
