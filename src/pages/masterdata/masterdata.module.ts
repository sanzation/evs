import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterdataPage } from './masterdata';

@NgModule({
  declarations: [
    MasterdataPage,
  ],
  imports: [
    IonicPageModule.forChild(MasterdataPage),
  ],
})
export class MasterdataPageModule {}
