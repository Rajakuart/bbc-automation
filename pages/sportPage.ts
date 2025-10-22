
import { HomePage } from "./homePage";

export class SportPage extends HomePage{

   // navigate to the sport page and set the storage state
   async navigateToSportpage(url:string){
      await this.loadApp(url);
      await this.page.context().storageState({path:"data/sportsStorageState.json"});
      const sportTtle = await this.page.title();
      console.log(sportTtle);
      if (sportTtle.startsWith("BBC Sport")) {
         console.log("User is successfully navigated to BBC Sport Page");
         
      } else {
         console.log("User is NOT navigated to BBC Sport Page");  
      }              
   }

}
