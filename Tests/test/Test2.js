import { Builder, By, Key, until } from 'selenium-webdriver';
import chromedriver from 'chromedriver';
import assert from 'assert'; // Import assert for assertions
import { log } from 'console';



describe('Register', function () {
 

    const BASE_URL = 'https://olx.ba'


 
    this.timeout(10000);

    it('should open Olx homepage', async function () {
        this.timeout(10000);
        await driver.get(BASE_URL);
        const title = await driver.getTitle();
        
        await driver.wait(until.elementLocated(By.css('button[mode="primary"]')), 5000); // Čeka do 10 sekundi dok element ne bude lociran
        const dugmic = await driver.findElement(By.css('button[mode="primary"]'));
        await dugmic.click();

        const RegisterButton = await driver.findElement(By.css(`a.font-semibold[aria-label="registracija"]`));
        await RegisterButton.click();

        const EmailField = await driver.findElement(By.xpath(`//div[@class="relative"]/input`));
        await EmailField.click();
        await EmailField.sendKeys('admin@admin.com');

        const Password = await driver.findElement(By.css(`input[type='password']`));
        await Password.click();
        await Password.sendKeys('adminadmin');

        const OlxName = await driver.findElement(By.xpath(`(//div[@class='relative']//input)[3]`));
        await OlxName.click();
        await OlxName.sendKeys('User226');


        const Gender = await driver.findElement(By.xpath(`(//div[contains(@class,'flex flex-col')]//select)[1]`));
        await Gender.click();
        const optionMale = await driver.findElement(By.xpath(`//select//option[2]`));
        await optionMale.click();

        const Region = await driver.findElement(By.css(`select[label='Regija']`));
        await Region.click();
        const optionRegion = await driver.findElement(By.xpath(`//option[normalize-space(text())='Zeničko-dobojski kanton']`));
        await optionRegion.click();

        const Place= await driver.findElement(By.css(`select[label='Mjesto']`));
        await Place.click();
        await driver.sleep(500);

        const optionPlace = await driver.findElement(By.xpath(`//option[normalize-space(text())='Zenica']`));
        await optionPlace.click();

        const SlazemSe= await driver.findElement(By.css(`input#checkbox`));
        await SlazemSe.click();

        const Register = await driver.findElement(By.xpath(`//button[contains(.,'Registruj se')]`));
        await Register.click();
    
       
   
        
        await driver.sleep(500);
        const currentUrl = await driver.getCurrentUrl();
        
       assert.equal(currentUrl, `${BASE_URL}`, 'The URL is incorrect');
         
    });
});