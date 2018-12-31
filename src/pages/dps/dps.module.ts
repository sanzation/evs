import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DpsPage } from './dps';

@NgModule({
  declarations: [
    DpsPage
  ],
  imports: [
    IonicPageModule.forChild(DpsPage),
  ],
  exports: [
  	DpsPage
  ]
})
export class DpsPageModule {}
