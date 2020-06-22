import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManageComponent } from './components/product-manage/product-manage.component';
import { ProductInfoComponent} from './components/product-info/product-info.component';
import { ManualsComponent } from './components/manuals/manuals.component';
import { OperateTrainComponent} from './components/operate-train/operate-train.component';
import { MaintainTrainComponent} from './components/maintain-train/maintain-train.component';
import { LearnComponent} from './components/learn/learn.component';
import {PrefaceComponent} from './components/preface/preface.component';
import { SummaryComponent } from './components/summary/summary.component';
const routes: Routes = [
  {path: 'product-manage', component: ProductManageComponent},
  {path: '', redirectTo: 'product-manage', pathMatch: 'full'},
  {path: 'product-info', component: ProductInfoComponent,
   children: [
     {path: 'preface', component: PrefaceComponent},
     {path: 'manuals', component: ManualsComponent,
    children: [
      {path: '', redirectTo: '/main/product/product-info/manuals', pathMatch: 'full'},
      {path: 'summary', component: SummaryComponent}
    ]
    },
     {path: 'operate-train', component: OperateTrainComponent},
     {path: 'maintain-train', component: MaintainTrainComponent},
     {path: 'learn', component: LearnComponent},
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
