import { test as base } from "@playwright/test"
import { HomePage } from "../pages/homePage"
import { SportPage } from "../pages/sportPage";
import { CommentPage } from "../pages/commentPage";

type BbcFixtures = {
    homePage: HomePage;
    sportPage: SportPage;
    commentPage: CommentPage;
};
export const test = base.extend<BbcFixtures>({
    homePage: async ({page},use)=>{
        const homePage = new HomePage(page);
        await use (homePage);
    },
    sportPage: async ({page},use)=>{
        const sportPage = new SportPage(page)
        await use (sportPage);
    },
    commentPage: async ({page},use)=>{
        const commentPage = new CommentPage(page)
        await use (commentPage);
    }
    
})
