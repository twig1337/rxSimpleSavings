import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private localNotifications: LocalNotifications) {}

  pusher() {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'I HAVE BECOME DEATH! DESTROYER OF WORLDS!',
      foreground: true,
      data: { secret: 'MOOHAHAHHAHAHAHAHA' }
    });

  }
}
