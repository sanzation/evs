import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaPage } from './wa';

@NgModule({
  declarations: [
    WaPage,
  ],
  imports: [
    IonicPageModule.forChild(WaPage),
  ],
  exports: [
	WaPage	
  ]
})
export class WaPageModule {}
