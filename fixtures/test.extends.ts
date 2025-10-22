import { test as base } from "@playwright/test"
import { HomePage } from "../pages/homePage"
import { SportPage } from "../pages/sportPage";
import { CommentPage } from "../pages/commentPage";

// Define a type for BBC fixtures to specify available page objects
type BbcFixtures = {
    homePage: HomePage;
    sportPage: SportPage;
    commentPage: CommentPage;
};

// Extend the base Playwright test with custom BBC page fixtures
export const test = base.extend<BbcFixtures>({

    // Fixture for the BBC Home page
    homePage: async ({ page }, use) => {
        // Create a new HomePage instance
        const homePage = new HomePage(page);  
        // Provide it to the test 
        await use(homePage);                   
    },

    // Fixture for the BBC Sport page
    sportPage: async ({ page }, use) => {
        // Create a new SportPage instance
        const sportPage = new SportPage(page); 
         // Provide it to the test
        await use(sportPage);                 
    },

    // Fixture for the BBC Comment page
    commentPage: async ({ page }, use) => {
        // Create a new CommentPage instance
        const commentPage = new CommentPage(page); 
          // Provide it to the test
        await use(commentPage);                  
    }

});
