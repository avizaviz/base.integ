exports.base = class base {
  async startBrowserAndPage(puppeteer) {
    this.browser = await puppeteer.launch({
      headless: true,
      devtools: true,
      userDataDir: "./",
      args: ["--no-sandbox"],
    });
    this.page = (await this.browser.pages())[0];
    return [this.browser, this.page];
  }
};
