import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SystemRoutingModule } from './system-routing.module';
import { SystemManageComponent } from './components/system-manage/system-manage.component';
import { ManualsManageComponent } from './components/manuals-manage/manuals-manage.component';
import { AddManualsModalComponent } from './components/modals/add-manuals-modal/add-manuals-modal';
import { UserManageComponent } from './components/user-manage/user-manage.component';
import { RoleManageComponent } from './components/role-manage/role-manage.component';
import { LogManageComponent} from './components/log-manage/log-manage.component';
import { DataDownComponent} from './components/data-down/data-down.component';
import { DataUpComponent} from './components/data-up/data-up.component';
import { FeedBackComponent } from './components/feed-back/feed-back.component';
import { AddUserModalComponent} from './components/modals/add-user-modal/add-user-modal.component';

const SYSTEMCOMPONENTS = [
  SystemManageComponent,
  ManualsManageComponent,
  AddManualsModalComponent,
  UserManageComponent,
  RoleManageComponent,
  LogManageComponent,
  DataDownComponent,
  DataUpComponent,
  FeedBackComponent,
  AddUserModalComponent
];
@NgModule({
  declarations: [
    ...SYSTEMCOMPONENTS
  ],
  entryComponents: [
    AddManualsModalComponent,
    AddUserModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    SystemRoutingModule
  ]
})
export class SystemModule { }
