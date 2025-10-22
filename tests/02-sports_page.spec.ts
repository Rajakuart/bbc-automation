import { test } from "../fixtures/test.extends";
import { URLConstants } from "../constants/urlConstants";

test.use({ storageState: 'data/sportsStorageState.json' });
test("02 - navigate to Sports Page", async ({ homePage, sportPage }) => {
    await sportPage.navigateToSportpage(URLConstants.Sport);
});