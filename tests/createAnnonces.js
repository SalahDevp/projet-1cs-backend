//import chromedriver in order for Selenium to open a Chrome browser by itself
require("chromedriver");

//import the following classes from Selenium
const { Builder, By, Key, until } = require("selenium-webdriver");
const authenticate = require("./authenticate");

//NOTE: please read the README file on this folder
const USERID = 2;
const TOKEN = "445651226b6c38b42f90029ac11129844dcad0d4";

async function createAnnonces() {
  //open Chrome browser
  let driver = await new Builder().forBrowser("chrome").build();

  //go to website
  await driver.get("http://localhost:3000/");
  //authenticate
  await authenticate(driver, TOKEN, USERID);
  //go to home page
  await driver.get("http://localhost:3000/creeannonce");
}

createAnnonces(); //call the function
