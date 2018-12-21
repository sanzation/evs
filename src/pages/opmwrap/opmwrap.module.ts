import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { OpmwrapPage } from './opmwrap';
import { OpmPageModule } from '../opm/opm.module';
@NgModule({
  declarations: [
    OpmwrapPage
  ],
  imports: [
    IonicPageModule.forChild(OpmwrapPage),
    ComponentsModule,
    OpmPageModule
  ],
  exports: [
	OpmwrapPage	
  ]
})
export class OpmwrapPageModule {}
