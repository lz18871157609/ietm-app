import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Zip } from '@ionic-native/zip/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

import { SQLiteService } from './services/sqlite-service.service';
import {Logger} from './common/logger/logger';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './modules/home/home.component';
import { ListComponent } from './modules/list/list.component';
import { UserSetingsComponent } from './components/user-setings/user-setings.component';
import { AboutComponent } from './components/about/about.component';

import { LoginModule } from './modules/login/login.module';

const COMPONENTS = [
  MainComponent,
  HomeComponent,
  ListComponent,
  UserSetingsComponent,
  AboutComponent
];
@NgModule({
  declarations: [AppComponent,
  ...COMPONENTS
],
  entryComponents: [
    UserSetingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    IonicModule.forRoot({mode: 'md'}),
    AppRoutingModule
  ],
  exports: [
...COMPONENTS
  ],
  providers: [
    Logger,
    StatusBar,
    SplashScreen,
    HeaderColor,
    Crop,
    Toast,
    Device,
    FileChooser,
    FileTransfer,
    FileTransferObject,
    File,
    FilePath,
    Camera,
    Base64ToGallery,
    Base64,
    SqliteDbCopy,
    AndroidPermissions,
    SQLitePorter,
    SQLiteService,
    MobileAccessibility,
    ScreenOrientation,
    AndroidFullScreen,
    HTTP,
    Zip,
    FilePath,
    ImagePicker,
    PhotoViewer,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
