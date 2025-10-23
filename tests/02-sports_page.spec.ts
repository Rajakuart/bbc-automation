import { test } from "../fixtures/test.extends";
import { UrlConstants } from "../constants/urlConstants";

test.use({ storageState: 'data/sportsStorageState.json' });
test("02 - navigate to Sports Page", async ({ homePage, sportPage }) => {
    await sportPage.navigateToSportpage(UrlConstants.Sport);
});