import { Builder } from 'selenium-webdriver';
import chromedriver from 'chromedriver';

let driver;

beforeEach(async function () {
    this.timeout(10000); // Timeout za setup
    driver = await new Builder().forBrowser('chrome').setChromeOptions().build();
    global.driver = driver; // Postavi driver kao globalnu varijablu
});

afterEach(async function () {
    if (driver) {
        await driver.quit();
    }
});