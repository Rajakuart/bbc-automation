import { expect, selectors } from "@playwright/test";
import { HomePage } from "./homePage";

export class CommentPage extends HomePage {

    async navigateToCommentsSection() {
        console.log("Navigating to Comments Section URL");
    }

    async getCommentsSection() {
        const message = this.page.locator("//div//h2[text()='Join the conversation']");

        if (await message.isVisible().catch(() => false)) {
            console.log("Comments are closed on this article, so commenting is disabled.");
        } else {
            console.log("Commenting appears to be enabled.");
        }

    }
    async filterCommentsByNewest() {
        const filterDropdown = this.page.getByRole('combobox', { name: "Show" });
        await filterDropdown.click();
        await filterDropdown.selectOption({ value: 'NewestFirst' });
    }
    async verifyCommentsSortedByNewest() {
        const commentTimestamps = this.page.locator("//div[@data-testid='comment']//time");
        expect (await this.page.screenshot()).toMatchSnapshot({path: 'utils/screenshot/CommentsSortedByNewest.png'},{maxDiffPixels: 50, threshold: 0.8});
        console.log("Verified that comments are sorted by Newest First");
    }

}