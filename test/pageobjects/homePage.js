class HomePage{
    get inptSearch() { return $('#search_query_top'); };
    get btnSearch() { return $('.button-search'); };
    

    openSite() {
        browser.url('http://automationpractice.com/index.php');
    };
    doSearch(name) {
        this.inptSearch.waitForDisplayed({ timeout: 3000 });
        this.inptSearch.setValue(name);
        this.btnSearch.click();
    };
};

module.exports = new HomePage();