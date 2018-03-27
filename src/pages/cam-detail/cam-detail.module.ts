import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CamDetailPage } from './cam-detail';

@NgModule({
  declarations: [
    CamDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CamDetailPage),
  ],
})
export class CamDetailPageModule {}
