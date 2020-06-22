import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { importComs } from './dynamicComponents';


@NgModule({
  declarations: [
    ...importComs
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...importComs
  ],
  entryComponents: [
    ...importComs
  ]
})
export class DmoduleModule { }
