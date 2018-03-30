import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EvscallProvider } from '../../providers/evscall/evscall';
import { opData } from '../../utils/types';
import { parseDateTime } from '../../utils/func';
import { OpparentPage } from '../opparent/opparent';
/**
 * Generated class for the MaterialflowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materialflow',
  templateUrl: 'materialflow.html',
})
export class MaterialflowPage  extends OpparentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
	super(navCtrl,navParams,EvsCall);
	 setInterval(()=>{this.load('materialflow');},60000);
  }

  ionViewWillEnter() {
	this.load('materialflow');
  }

}
