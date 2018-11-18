import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { catData } from '../../utils/types';
import { OpmPage } from '../opm/opm';
import { DpsPage } from '../dps/dps';
import { ParentPage } from '../parent/parent';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
  //directives: [OpmPage, DpsPage] 
})
export class DashboardPage extends ParentPage {

	childclass: string;
	coliconclass: string;
	rowiconclass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
	super(navCtrl,navParams,EvsCall);
	this.childclass="flexchildcol";
	 this.coliconclass="on";
	 this.rowiconclass="off";
  }
doColSort(){
	 this.childclass="flexchildcol";
	 this.coliconclass="on";
	 this.rowiconclass="off";
}
doRowSort(){
	 this.childclass="flexchild";
	 this.coliconclass="off";
	 this.rowiconclass="on";
}
}
