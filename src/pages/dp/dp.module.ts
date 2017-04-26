import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DpPage } from './dp';

@NgModule({
  declarations: [
    DpPage,
  ],
  imports: [
    IonicPageModule.forChild(DpPage),
  ],
  exports: [
    DpPage
  ]
})
export class DpModule {}
