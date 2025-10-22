import {expect, Page} from '@playwright/test';
import { PlayWrightWrapper } from '../helper/playWright';

export class HomePage extends PlayWrightWrapper {
constructor(public page: Page) {
    super();
}

async open (url: string) {
   await this.loadApp(url)
   await this.page.waitForLoadState();
   console.log("url Loaded");
} 
async expectedUrlcheck (title : string = "BBC - Home") {
    await expect(this.page).toHaveTitle(new RegExp(title, 'i'));
    const pageTitle = await this.page.title();
  console.log('Page Title : ', pageTitle);
}
async clickSignIn(){
   await this.page.click("(//span[text()='Sign in'])[1]");
}
async enterUserName(username:string){
  const BBCUser = username;
  const userNameField =  this.page.locator("//span[text()='Email or username']");
  await userNameField.waitFor({state:'visible'});
  await userNameField.fill(BBCUser);
}
async clickContinue (){
  await this.page.click("//span[text()='Continue']");
}

async enterPassword (password: string){
  const BBCPassword = password;
  const passWordField = this.page.locator("//span[text()='Password']");
  await passWordField.waitFor({state:'visible'});
  await passWordField.fill(BBCPassword);

}
async clickSignin (){
  await this.page.click("//span[text()='Sign in']");
}
async getPageTitle (){
  await this.page.waitForTimeout(3000);
const pageTitle = await this.page.title();
if (pageTitle.startsWith("BBC - Home")  ) {
  console.log("User is successfully logged in to BBC Home Page");
  
} else {
  console.log("User is NOT logged in to BBC Home Page");  
}  
}
 
}
