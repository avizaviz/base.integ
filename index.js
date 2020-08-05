exports.base = class base {
  async startBrowserAndPage(puppeteer,headless) {
    this.browser = await puppeteer.launch({
      headless,
      devtools: true,
      userDataDir: "./", 
      args: ["--no-sandbox"],
    
     
    });
    this.page = (await this.browser.pages())[0];
    return [this.browser, this.page];
  }
};
