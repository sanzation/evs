import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CpsPage } from './cps';

@NgModule({
  declarations: [
    CpsPage,
  ],
  imports: [
    IonicPageModule.forChild(CpsPage),
  ],
})
export class CpsPageModule {}
