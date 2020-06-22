import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './modules/home/home.component';
import { ListComponent } from './modules/list/list.component';
import { AboutComponent } from './components/about/about.component';
const routes: Routes = [
  {path: 'main', component: MainComponent,
children:
[
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'exam', loadChildren: './modules/exam/exam.module#ExamModule'},
  {path: 'product', loadChildren: './modules/product/product.module#ProductModule'},
  {path: 'images', loadChildren: './modules/images/images.module#ImagesModule'},
  {path: 'system', loadChildren: './modules/system/system.module#SystemModule'},
]},
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
