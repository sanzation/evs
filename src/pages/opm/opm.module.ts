import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpmPage } from './opm';

@NgModule({
  declarations: [
    OpmPage
  ],
  imports: [
    IonicPageModule.forChild(OpmPage),
  ],
  exports: [
    OpmPage
  ]
})
export class OpmPageModule {}
