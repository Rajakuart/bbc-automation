import { Page } from "@playwright/test";


export class PlayWrightWrapper{
    // Declare a Playwright Page object (initialized later)
    page!: Page;


     public async loadApp(url: string) {
        try {
            // Navigate to the provided URL and wait until the page is fully loaded
            await this.page.goto(url); 
            console.log(`Successfully loaded the URL: ${url}`);
        } catch (error) {
            // Log the error and rethrow it for further handling
            console.log(`Error loading the page at ${url}:`);
            throw new Error(`Failed to load the page at ${url}`);
        }
    }
    
}

