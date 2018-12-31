import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { ComponentsModule } from '../../components/components.module';

import { OpmPageModule } from '../opm/opm.module';
import { DpsPageModule } from '../dps/dps.module';
import { CpsPageModule } from '../cps/cps.module';
import { WaPageModule } from '../wa/wa.module';
import { WePageModule } from '../we/we.module';
import { MiscPageModule } from '../misc/misc.module';

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    ComponentsModule,
    OpmPageModule,
    DpsPageModule,
    CpsPageModule,
    WaPageModule,
    WePageModule,
    MiscPageModule
  ],
  exports: [
	DashboardPage	
  ]})
export class DashboardPageModule {}
