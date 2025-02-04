import { Builder, By, Key, until } from 'selenium-webdriver';
import chromedriver from 'chromedriver';
import assert from 'assert'; // Import assert for assertions
import { log } from 'console';
import { describe, it } from 'mocha';


describe('Search results test', function () {
    

    const BASE_URL = 'https://olx.ba'

    const expectedURL = '/pretraga?q=satovi'

    
    it('should open Olx homepage', async function () {
        
        this.timeout(20000);
        await driver.get(BASE_URL);
        const title = await driver.getTitle();
        

        const dugmic = await driver.findElement(By.css(`button[mode='primary']`));
        await dugmic.click();
        
   

        const searchBar = await driver.findElement(By.css(`input[name='notASearchField']`));
        
        await searchBar.click();
        await searchBar.sendKeys('satovi', Key.RETURN);
    

        await driver.wait(
         until.urlIs(`${BASE_URL}${expectedURL}`),
         10000, // Timeout in milliseconds
         'The URL did not change as expected'
     );
        
        
        await driver.sleep(500);
        const currentUrl = await driver.getCurrentUrl();
        
        assert.equal(currentUrl, `${BASE_URL}${expectedURL}`, 'The URL is incorrect');
         
    });
});