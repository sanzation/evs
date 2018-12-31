import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WePage } from './we';

@NgModule({
  declarations: [
    WePage,
  ],
  imports: [
    IonicPageModule.forChild(WePage),
  ],
  exports: [
    WePage	
  ]
})
export class WePageModule {}
