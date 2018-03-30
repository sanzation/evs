import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpendablePage } from './expendable';

@NgModule({
  declarations: [
    ExpendablePage,
  ],
  imports: [
    IonicPageModule.forChild(ExpendablePage),
  ],
})
export class ExpendablePageModule {}
