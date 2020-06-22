import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistinguishComponent } from './components/distinguish/distinguish.component';
import { ImageManageComponent } from './components/image-manage/image-manage.component';
import { ImageHomeComponent } from './components/image-home/image-home.component';
const routes: Routes = [
  {path: 'image-home', component: ImageHomeComponent,
children:
[
  {path: 'distinguish', component: DistinguishComponent},
  {path: 'image-manage', component: ImageManageComponent},
]},
  {path: '', redirectTo: 'image-home', pathMatch: 'fill'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
