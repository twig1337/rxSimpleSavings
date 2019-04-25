import {Component} from '@angular/core';

import {NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private localNotifications: LocalNotifications,
        private navCtrl: NavController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.localNotifications.on('click').subscribe(notification => {
                if (notification.data.id === 4) {
                    this.navCtrl.navigateForward(`/tabs/tab3`);
                } else {
                    this.navCtrl.navigateForward(`/tabs/tab2/${notification.data.id}`);
                }
            });

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
        });
    }
}
