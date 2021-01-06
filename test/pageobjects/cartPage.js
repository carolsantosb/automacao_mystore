class CartPage{
    get cart() { return $('a.button-medium[title="Proceed to checkout"]'); };
    get productSku() { return $('.cart_ref'); };

    
    clickCart() {
        this.cart.waitForDisplayed({ timeout: 10000 });
        this.cart.click();
    };
    
    validateProduct() {
        const sku = this.productSku.getText();
        expect(sku.toLowerCase()).toContain('sku : demo_2');
    };
};

module.exports = new CartPage();