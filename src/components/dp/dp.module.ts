import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DpComponent } from './dp';

@NgModule({
  declarations: [
    DpComponent,
  ],
  imports: [
    IonicPageModule.forChild(DpComponent),
  ],
  exports: [
    DpComponent
  ]
})
export class DpModule {}
