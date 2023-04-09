const { Builder, By, Key } = require("selenium-webdriver");
require("chromedriver");
async function test() {
    const searchString = "selenium";
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);
    const title = await driver.getTitle();
    console.log(title);
    await driver.quit();
}

test();
