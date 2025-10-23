import { expect, Page } from '@playwright/test';
import { PlayWrightWrapper } from '../helper/playWright';

export class HomePage extends PlayWrightWrapper {
  // initialize the page object and call the parent constructor
  constructor(public page: Page) {
    super();
  }
  // open the application URL and wait for the page to load
  async open(url: string) {
    await this.loadApp(url)
    await this.page.waitForLoadState();
    console.log("url Loaded");
  }
  // verify the page title to ensure correct navigation and get the page title
  async expectedUrlcheck(title: string = "BBC - Home") {
    await expect(this.page).toHaveTitle(new RegExp(title, 'i'));
    const pageTitle = await this.page.title();
    console.log('Page Title : ', pageTitle);
  }
  // click on the Sign In button to navigate to the login page
  async clickSignIn() {
    await this.page.click("(//span[text()='Sign in'])[1]");
  }
  // enter the username in the login form and wait for visibility
  async enterUserName(username: string) {
    const userEmail = username;
    const userNameField = this.page.locator("//span[text()='Email or username']");
    await userNameField.waitFor({ state: 'visible' });
    await userNameField.fill(userEmail);
  }
  //  click the Continue button to proceed to the password entry
  async clickContinue() {
    await this.page.click("//span[text()='Continue']");
  }
  // enter the password in the login form and wait for visibility
  async enterPassword(password: string) {
    const userPassword = password;
    const passWordField = this.page.locator("//span[text()='Password']");
    await passWordField.waitFor({ state: 'visible' });
    await passWordField.fill(userPassword);
  }
  // click the Sign In button to submit the login form
  async clickSignin() {
    await this.page.click("//span[text()='Sign in']");
  }
  // get the page title after login to verify successful login
  async getPageTitle() {
    await this.page.waitForTimeout(3000);
    const pageTitle = await this.page.title();
    if (pageTitle.startsWith("BBC - Home")) {
      console.log("User is successfully logged in to BBC Home Page");

    } else {
      console.log("User is NOT logged in to BBC Home Page");
    }
  }

}
