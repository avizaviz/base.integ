exports.base = class base {
  async startBrowserAndPage(puppeteer,headless) {
    this.browser = await puppeteer.launch({
      headless,
      devtools: true,
      userDataDir: "./", 
      ignoreHTTPSErrors: true,
      acceptInsecureCerts: true,
      args: ['--proxy-bypass-list=*', '--disable-gpu', '--disable-dev-shm-usage', '--disable-setuid-sandbox', '--no-first-run', '--no-sandbox', '--no-zygote', '--ignore-certificate-errors', '--ignore-certificate-errors-spki-list', '--enable-features=NetworkService']
     /// args: ["--no-sandbox"],
    
     
    });
    this.page = (await this.browser.pages())[0];
    return [this.browser, this.page];
  }
};
