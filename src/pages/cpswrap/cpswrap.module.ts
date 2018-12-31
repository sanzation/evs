import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CpswrapPage } from './cpswrap';
import { ComponentsModule } from '../../components/components.module';
import { CpsPageModule } from '../cps/cps.module';

@NgModule({
  declarations: [
    CpswrapPage,
  ],
  imports: [
    IonicPageModule.forChild(CpswrapPage),
    ComponentsModule,
    CpsPageModule
  ],
  exports: [
	CpswrapPage
	]
})
export class CpswrapPageModule {}
