import { test } from "../fixtures/test.extends";
import { UrlConstants } from "../constants/urlConstants";
import {login} from "../constants/credentialsLoginData"

  test("01- loads and has BBC in title", async ({ homePage }) => {
    await homePage.open(UrlConstants.Home);
    await homePage.expectedUrlcheck();
    await homePage.clickSignIn();
    await homePage.enterUserName(login.userEmail);
    await homePage.clickContinue();
    await homePage.enterPassword(login.userPassword);
    await homePage.clickSignin();
    await homePage.getPageTitle();

});
