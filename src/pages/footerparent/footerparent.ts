import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';


/**
 * Generated class for the FooterparentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-footerparent',
  templateUrl: 'footerparent.html',
})
export class FooterparentPage {
	constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
		
  }
}
