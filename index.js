exports.base = class base {
  async startBrowserAndPage(puppeteer,headless) {
    this.browser = await puppeteer.launch({
      headless,
      devtools: true,
      userDataDir: "./", 
      args: ["--no-sandbox"],
      //args: [ '--ignore-certificate-errors' ],
    });
    this.page = (await this.browser.pages())[0];
    return [this.browser, this.page];
  }
};
