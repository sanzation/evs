/* node */

import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { calcTimeleft } from '../../utils/func';
import { catData } from '../../utils/types';

import { ParentPage } from '../parent/parent';
/*
*
 * Generated class for the CpsPage page.
 *
 * See https://ionicframework.cpsauto/docs/cpsautoponents/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cps',
  templateUrl: 'cps.html'
})
export class CpsPage extends ParentPage {

	cpickCat: catData;
	cdspCat: catData;
	cpuserCat: catData;
	cduserCat: catData;
	caprioCat: catData;
	cdprioCat: catData;
	oopenCat: catData;
	oopennCat: catData;



  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {

	super(navCtrl,navParams,EvsCall);
	this.cpickCat=new catData('cpsa');
	this.cdspCat =new catData('cpsd');  
	this.cpuserCat=new catData('cpsacnt');
	this.cduserCat=new catData('cpsdcnt');
	this.caprioCat=new catData('caprio');
	this.cdprioCat=new catData('cdprio');
	this.oopenCat=new catData('copen');
	this.oopennCat=new catData('copenn');

	this.CatCol.push(this.cpickCat);
	this.CatCol.push(this.cdspCat);
	this.CatCol.push(this.cpuserCat);
	this.CatCol.push(this.cduserCat);
	this.CatCol.push(this.caprioCat);
	this.CatCol.push(this.cdprioCat);
	this.CatCol.push(this.oopenCat);
	this.CatCol.push(this.oopennCat);


  }

	
ionViewDidEnter() {
		this.timeleft=calcTimeleft(this.cpickCat.data,this.oopenCat.data);
	}
}

