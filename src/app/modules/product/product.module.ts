import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ProductRoutingModule } from './product-routing.module';
import { ProductManageComponent } from './components/product-manage/product-manage.component';
import { ProductInfoComponent} from './components/product-info/product-info.component';
import { ManualsComponent } from './components/manuals/manuals.component';
import { OperateTrainComponent} from './components/operate-train/operate-train.component';
import { MaintainTrainComponent} from './components/maintain-train/maintain-train.component';
import { LearnComponent} from './components/learn/learn.component';
import {PrefaceComponent} from './components/preface/preface.component';
import { SummaryComponent } from './components/summary/summary.component';
import { importComs } from '../../modules/dmodule/dynamicComponents';
import { ReactiveFormsModule } from '@angular/forms';
const PRODUCTCOMPONENTS = [
  ProductManageComponent,
  ProductInfoComponent,
  ManualsComponent,
  OperateTrainComponent,
  MaintainTrainComponent,
  LearnComponent,
  PrefaceComponent,
  SummaryComponent
];

@NgModule({
  declarations: [
    ...importComs,
    ...PRODUCTCOMPONENTS,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  exports: [
    ...importComs,
    ...PRODUCTCOMPONENTS,
  ],
  entryComponents: [
    ...importComs
  ]
})
export class ProductModule { }
