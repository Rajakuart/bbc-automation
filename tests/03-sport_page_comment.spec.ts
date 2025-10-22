import {test } from '../fixtures/test.extends';
import { URLConstants } from '../constants/urlConstants';


test.use({ storageState: 'data/sportsStorageState.json' });
test (`Verify Comments Section on Sports Page`, async ({sportPage,commentPage}) => {
   await sportPage.navigateToSportpage(URLConstants.CommentURL);
   await commentPage.navigateToCommentsSection();
   await commentPage.getCommentsSection();
   await commentPage.filterCommentsByNewest();
   //await commentPage.verifyCommentsSortedByNewest();
   await commentPage.filerCommentsByOldest();
   await commentPage.verifyCommentsSortedByHighestRated();

})