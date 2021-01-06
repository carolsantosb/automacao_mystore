class ProdutctPage{
    get reference() { return $('#product_reference'); };
    get btnAddCart() { return $('#add_to_cart'); };
    get sizeProduct() { return $$('#group_1'); };
    get sltVariation() { return $('#color_8'); };

    //validar que está na pagina do produto
    validatePageProduct() {
        this.reference.waitForDisplayed({ timeout: 10000 });
        const ref = this.reference.getText();
        expect(ref.toLowerCase()).toContain('model demo_2');
    };
    selectVariation(){
        this.sizeProduct[0].isDisplayed();
        this.sizeProduct[0].click();
        this.sltVariation.isDisplayed();
        this.sltVariation.click();
    };
    addCart(){
        this.btnAddCart.click();
    };
};

module.exports = new ProdutctPage();