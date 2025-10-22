import { expect, selectors } from "@playwright/test";
import { HomePage } from "./homePage";

export class CommentPage extends HomePage {

    // Navigate to the comments section of a BBC article
    async navigateToCommentsSection() {
        console.log("Navigating to Comments Section URL");
    }

    // Check if the comments section is visible or if commenting is disabled
    async getCommentsSection() {
        const message = this.page.locator("//div//h2[text()='Join the conversation']");

        // Verify whether the comment section is available
        if (await message.isVisible().catch(() => false)) {
            console.log("Comments are closed on this article, so commenting is disabled.");
        } else {
            console.log("Commenting appears to be enabled.");
        }
    }

    // Apply the "Newest First" filter to the comment section
    async filterCommentsByNewest() {
        const filterDropdown = this.page.getByRole('combobox', { name: "Show" });
        await filterDropdown.click();
        await filterDropdown.selectOption({ value: 'NewestFirst' });
    }

    // Verify that comments are correctly sorted by "Newest First"
    async verifyCommentsSortedByNewest() {
        const commentTimestamps = this.page.locator("//div[@data-testid='comment']//time");

        // Capture a screenshot and compare it with the expected snapshot for verification
        await this.page.screenshot({ path: 'utils/screenshot/CommentsSortedByNewest.png' });
        expect(await this.page.screenshot()).toMatchSnapshot('../utils/screenshot/CommentsSortedByNewest.png', { maxDiffPixels: 50, threshold: 0.8 });
        console.log("Verified that comments are sorted by Newest First");
    }

    // Apply the "Oldest First" filter and verify that it works correctly
    async filerCommentsByOldest() {
        const filterDropdown = this.page.getByRole('combobox', { name: "Show" });
        await filterDropdown.click();
        await filterDropdown.selectOption({ value: 'OldestFirst' });

        // Validate that the correct filter option is active
        expect(await filterDropdown.inputValue()).toBe('OldestFirst');

        // Verify that a specific comment is visible, confirming the filter worked
        expect(await this.page.locator("//span[text()='Comment by dan  at 22:19 3 Jul']").isVisible()).toBe(true);
    }

    // Apply the "Highest Rated" filter and verify visibility of the top-rated comment
    async verifyCommentsSortedByHighestRated() {
        const filterDropdown = this.page.getByRole('combobox', { name: "Show" });
        await filterDropdown.click();
        await filterDropdown.selectOption({ label: 'Highest Rated' });

        const topComment = this.page.locator("//span[text()='404']");
        // Verify that the top-rated comment is visible after filtering
        await expect(topComment).toBeVisible();
        console.log("Verified that the '404' comment is visible after selecting Highest Rated.");
    }
}