import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userInput: string;
    searchterm = '';
    tweetsdata;

  constructor (private http: Http) {}

  sendTweet() {
    const tweetString = this.userInput + ' #rxss #simpleDrugSavings';

    alert(tweetString);
  }

  makecall() {
    var headers = new Headers();
    var searchterm = 'query=#spacex #tesla';

    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');

    this.http.post('http://localhost:3000/authorize', {headers : headers}).subscribe((res) => {
      console.log(res);
    });

    this.http.post('http://localhost:3000/search', searchterm, {headers : headers}).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
      console.log(this.tweetsdata);
    });
  }

    postTweet(data: string) {
      var headers = new Headers();

      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Access-Control-Allow-Origin', '*');

      this.http.post('http://localhost:3000/postTweet', data,  {headers : headers}).subscribe((res) => {
        console.log(res);
      });
    }
}
