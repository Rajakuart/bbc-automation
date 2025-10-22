import { test } from "../fixtures/test.extends";
import { URLConstants } from "../constants/urlConstants";
import {login} from "../constants/credentialsLoginData"

  test("loads and has BBC in title", async ({ homePage }) => {
    await homePage.open(URLConstants.Home);
    await homePage.expectedUrlcheck();
    await homePage.clickSignIn();
    await homePage.enterUserName(login.BBCUser);
    await homePage.clickContinue();
    await homePage.enterPassword(login.BBCPassword);
    await homePage.clickSignIn();
    await homePage.getPageTitle();

  
});
