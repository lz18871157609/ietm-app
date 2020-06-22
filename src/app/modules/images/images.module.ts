import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ImagesRoutingModule } from './images-routing.module';
import { DistinguishComponent } from './components/distinguish/distinguish.component';
import { ImageManageComponent } from './components/image-manage/image-manage.component';
import { ImageHomeComponent } from './components/image-home/image-home.component';

const IMAGESCOMPONENTS = [
  ImageHomeComponent,
  ImageManageComponent,
  DistinguishComponent
];
@NgModule({
  declarations: [
    ...IMAGESCOMPONENTS
  ],
  entryComponents: [
  //  AddManualsModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ImagesRoutingModule
  ]
})
export class ImagesModule { }
