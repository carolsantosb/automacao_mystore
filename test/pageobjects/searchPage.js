class SearchPage{
    get nameProduct() { return $('a.product-name[title="Blouse"]'); };

    //validar que está na página de busca
    validateSearch(name) {
        this.nameProduct.waitForDisplayed({ timeout: 10000 });
        const titleProduct = this.nameProduct.getText();
        expect(titleProduct.toLowerCase()).toContain(name);
    };

    selectProduct() {
        this.nameProduct.click();
    }
};

module.exports = new SearchPage();
