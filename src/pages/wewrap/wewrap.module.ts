import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { WePageModule } from '../we/we.module';
import { WewrapPage } from './wewrap';

@NgModule({
  declarations: [
    WewrapPage,
  ],
  imports: [
    IonicPageModule.forChild(WewrapPage),
    ComponentsModule,
    WePageModule
  ],
  exports: [
    WewrapPage	
  ]
})
export class WewrapPageModule {}
