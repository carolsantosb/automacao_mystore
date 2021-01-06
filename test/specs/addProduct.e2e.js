const HomePage = require('../pageobjects/homePage');
const SearchPage = require('../pageobjects/searchPage');
const ProductPage = require('../pageobjects/productPage');
const CartPage = require('../pageobjects/cartPage');


describe('Search for a product and add it to the cart on the My store websiten', () => {
    it('Search and add item to cart', () => {
        HomePage.openSite();
        HomePage.doSearch('blouse');
        SearchPage.validateSearch('blouse');
        SearchPage.selectProduct();
        ProductPage.validatePageProduct();
        ProductPage.selectVariation();
        ProductPage.addCart();
        CartPage.clickCart();
        CartPage.validateProduct();
    });
});


