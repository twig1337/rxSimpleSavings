import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userInput: string;

  sendTweet() {
    const tweetString = this.userInput + ' #rxss #simpleDrugSavings';

    alert(tweetString);
  }
}
