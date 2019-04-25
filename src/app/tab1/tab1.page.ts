import { Component } from '@angular/core';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private localNotifications: LocalNotifications) {}

  loadPushes() {
    this.localNotifications.schedule({
      id: 1,
      text: 'Make a quick call and save $354!',
      icon: '/assets/rxss-mobile-logo.svg',
      foreground: true,
      data: { id: 1 }
    });

    this.localNotifications.schedule({
      id: 2,
      text: 'Filling your prescription? Switch to a generic and save $30 today!',
      icon: '/assets/icon/favicon.png',
      foreground: true,
      data: { id: 2 }
    });

    this.localNotifications.schedule({
      id: 3,
      text: 'Filling your prescription? Go to Walgreens instead and save $17 today!',
      icon: '/assets/icon/favicon.png',
      foreground: true,
      data: { id: 3 }
    });

    this.localNotifications.schedule({
      id: 4,
      text: 'Did you save money today? Share it!',
      icon: '/assets/icon/favicon.png',
      foreground: true,
      data: { id: 4 }
    });
  }
}
