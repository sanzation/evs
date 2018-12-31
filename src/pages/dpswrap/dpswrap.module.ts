import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { DpswrapPage } from './dpswrap';
import { DpsPageModule } from '../dps/dps.module';

@NgModule({
  declarations: [
    DpswrapPage,
  ],
  imports: [
    IonicPageModule.forChild(DpswrapPage),
    ComponentsModule,
    DpsPageModule
  ],
  exports: [
  	DpswrapPage
  ]
})
export class DpswrapPageModule {}
