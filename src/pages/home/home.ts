import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpmPage } from '../opm/opm';
import { DpsPage } from '../dps/dps';
import { CpsPage } from '../cps/cps';
import { WaPage } from '../wa/wa';
import { WePage } from '../we/we';
import { MiscPage } from '../misc/misc';
import { CamsPage } from '../cams/cams';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController  ) {
  }

   ionViewWillEnter(){
   }

  pushOpm(){
   this.navCtrl.push(OpmPage);
  }
  pushDps(){
   this.navCtrl.push(DpsPage);
   }
   pushCps(){
   this.navCtrl.push(CpsPage);
   }
   pushWe(){
   this.navCtrl.push(WePage);
   }
   pushWa(){
   this.navCtrl.push(WaPage);
   }
   pushMisc(){
   this.navCtrl.push(MiscPage);
   }
   pushCams(){
   this.navCtrl.push(CamsPage);
   }
}

