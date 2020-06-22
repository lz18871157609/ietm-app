import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemManageComponent } from './components/system-manage/system-manage.component';
import { ManualsManageComponent } from './components/manuals-manage/manuals-manage.component';
import { UserManageComponent } from './components/user-manage/user-manage.component';
import { RoleManageComponent } from './components/role-manage/role-manage.component';
import { LogManageComponent} from './components/log-manage/log-manage.component';
import { DataDownComponent} from './components/data-down/data-down.component';
import { DataUpComponent} from './components/data-up/data-up.component';
import { FeedBackComponent } from './components/feed-back/feed-back.component';
import { AddUserModalComponent } from './components/modals/add-user-modal/add-user-modal.component';
const routes: Routes = [
  {path: 'system-manage', component: SystemManageComponent,
children: [
  {path: 'manuals-manage', component: ManualsManageComponent},
  {path: 'user-manage', component: UserManageComponent},
  {path: 'role-manage', component: RoleManageComponent},
  {path: 'log-manage', component: LogManageComponent},
  {path: 'data-down', component: DataDownComponent},
  {path: 'data-up', component: DataUpComponent},
  {path: 'feed-back', component: FeedBackComponent},
  {path: 'add-user-modal', component: AddUserModalComponent},
]
},
  {path: '', redirectTo: 'system-manage', pathMatch: 'fill'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
