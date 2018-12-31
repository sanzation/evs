import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { MiscwrapPage } from './miscwrap';
import { MiscPageModule } from '../misc/misc.module';
@NgModule({
  declarations: [
    MiscwrapPage,
  ],
  imports: [
    IonicPageModule.forChild(MiscwrapPage),
    ComponentsModule,
    MiscPageModule
  ],
  exports: [
  	MiscwrapPage
  ]
})
export class MiscwrapPageModule {}
