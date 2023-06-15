//import chromedriver in order for Selenium to open a Chrome browser by itself
require("chromedriver");
const wilayas = require("./wilayas.json");
const communes = require("./communes.json");
//import the following classes from Selenium
const { Builder, By, Key, until } = require("selenium-webdriver");
const authenticate = require("./authenticate");
const { arrayBuffer } = require("stream/consumers");

//NOTE: please read the README file on this folder
const USERID = 2;
const TOKEN = "445651226b6c38b42f90029ac11129844dcad0d4";

async function main() {
  //open Chrome browser
  let driver = await new Builder().forBrowser("chrome").build();

  //go to website
  await driver.get("http://localhost:3000/");
  //authenticate
  await authenticate(driver, TOKEN, USERID);

  for (let i = 0; i < 20; i++) {
    //go to create page
    await driver.get("http://localhost:3000/creeannonce");
    //select inputs
    const categorie = await driver.findElement(By.id("categorie"));
    const type = await driver.findElement(By.id("type"));
    const surface = await driver.findElement(By.id("surface"));
    const prix = await driver.findElement(By.id("prix"));
    const description = await driver.findElement(By.id("description"));
    const wilaya = await driver.findElement(By.id("wilaya"));
    const commune = await driver.findElement(By.id("commune"));
    const adresse = await driver.findElement(By.id("adresse"));
    const submitBtn = await driver.findElement(By.id("submit"));
    const categorieOpt = [
      "Vente",
      "Echange",
      "Location",
      "Location pour vacances",
    ];
    const typeOpt = [
      "Terrain",
      "Terrain Agricole",
      "Appartement",
      "Maison",
      "Bungalow",
      "Autre",
    ];
    const getrandomKey = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const randWilayaNum = Math.floor(Math.random() * wilayas.length);

    //fill inputs
    await categorie.sendKeys(getrandomKey(categorieOpt));
    await type.sendKeys(getrandomKey(typeOpt));
    await surface.sendKeys(Math.floor(Math.random() * 10000) + 1);
    await prix.sendKeys(Math.floor(Math.random() * 1000000) + 1);
    await description.sendKeys("test");
    await wilaya.sendKeys(wilayas[randWilayaNum]);
    await commune.sendKeys(getrandomKey(communes[randWilayaNum - 1]));
    await adresse.sendKeys("adresse");
    await submitBtn.click();
  }
}

main(); //call the function
