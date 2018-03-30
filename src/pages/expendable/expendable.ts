import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EvscallProvider } from '../../providers/evscall/evscall';
import { opData } from '../../utils/types';
import { parseDateTime } from '../../utils/func';
import { OpparentPage } from '../opparent/opparent';
/**
 * Generated class for the ExpendablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expendable',
  templateUrl: 'expendable.html',
})
export class ExpendablePage extends OpparentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
	super(navCtrl,navParams,EvsCall);
	 setInterval(()=>{this.load('expendable');},60000);
  }

  ionViewWillEnter() {
	this.load('expendable');
  }

}
