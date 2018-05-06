import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { opData } from '../../utils/types';

/**
 * Generated class for the OpdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opdetail',
  templateUrl: 'opdetail.html',
})
export class OpdetailPage {

	op: opData;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.op=navParams.get("first");
  }

  ionViewDidLoad() {
  }

}
