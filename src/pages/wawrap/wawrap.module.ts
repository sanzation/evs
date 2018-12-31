import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WawrapPage } from './wawrap';
import { ComponentsModule } from '../../components/components.module';
import { WaPageModule } from '../wa/wa.module';

@NgModule({
  declarations: [
    WawrapPage,
  ],
  imports: [
    IonicPageModule.forChild(WawrapPage),
    ComponentsModule,
    WaPageModule
  ],
  exports: [
	WawrapPage	
  ]
})
export class WawrapPageModule {}
