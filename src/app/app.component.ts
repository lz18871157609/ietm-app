import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import { File } from '@ionic-native/file/ngx';
import { SQLiteService } from './services/sqlite-service.service';
import { SQLite, SQLiteObject, SQLiteTransaction } from '@ionic-native/sqlite/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Logger } from './common/logger/logger';
import vConsole from 'vconsole';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private headerColor: HeaderColor,
    private mobileAccessibility: MobileAccessibility,
    private screenOrientation: ScreenOrientation,
    private androidFullScreen: AndroidFullScreen,
    private device: Device,
    private sqliteService: SQLiteService,
    private logger: Logger,
    private file: File,
    private sQLite: SQLite,
    private androidPermissions: AndroidPermissions
  ) {
    this.initializeApp();
  }

  initializeApp() {
    if (this.platform.is('android')) {
      // DEV模式 开启console功能
      let vconsole = new vConsole();
    }
    this.headerColor.tint('#becb29');
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.mobileAccessibility.usePreferredTextZoom(false);
      this.androidFullScreen.isImmersiveModeSupported().then(() => { this.androidFullScreen.immersiveMode() }).catch(e => { console.log(e) });
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then((result) => {
        if (result.hasPermission === false) {
          this.androidPermissions.requestPermissions([
            this.androidPermissions.PERMISSION.CAMERA,
            this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
            this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
          ]).then(() => {
            this.sqliteService.initDb();
          });
        } else {
          this.sqliteService.initDb();
        }
      })
    });
  }
}
