import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { camData } from '../../utils/types';
/**
 * Generated class for the CamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cam-detail',
  templateUrl: 'cam-detail.html',
})
export class CamDetailPage {

	  cam : camData;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  
	  this.cam=navParams.get("first");
	  
	  }

  ionViewDidLoad() {
	console.log(this.cam.name);
	console.log(this.cam.url);  
  }

}
