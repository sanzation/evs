/* node */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { calcTimeleft } from '../../utils/func';
import { catData } from '../../utils/types';

import { ParentPage } from '../parent/parent';
/*
*
 * Generated class for the DpsPage page.
 *
 * See https://ionicframework.dpick/docs/dpickponents/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dps',
  templateUrl: 'dps.html'
})
export class DpsPage extends ParentPage{

	dpickCat: catData;
	drpckCat: catData;
	dpuserCat: catData;
	druserCat: catData;
	dprioCat: catData;
	oopenCat: catData;
	oopennCat: catData;
	stInlCat: catData;
	saInlCat: catData;
	kkHbwCat: catData;
	kkDpsCat: catData;



  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {

	super(navCtrl,navParams,EvsCall);

	this.dpickCat=new catData('dpick');
	this.drpckCat =new catData('drpck');  
	this.dpuserCat=new catData('dpcnt');
	this.druserCat=new catData('drcnt');
	this.dprioCat=new catData('dprio');
	this.oopenCat=new catData('dopen');
	this.oopennCat=new catData('dopenn');
	this.stInlCat=new catData('stInl');
	this.saInlCat=new catData('saInl');
	this.kkHbwCat=new catData('kkHbw');
	this.kkDpsCat=new catData('kkDps');

	this.CatCol.push(this.dpickCat);
	this.CatCol.push(this.drpckCat);
	this.CatCol.push(this.dpuserCat);
	this.CatCol.push(this.druserCat);
	this.CatCol.push(this.dprioCat);
	this.CatCol.push(this.oopenCat);
	this.CatCol.push(this.oopennCat);
	this.CatCol.push(this.stInlCat);
	this.CatCol.push(this.saInlCat);
	this.CatCol.push(this.kkHbwCat);
	this.CatCol.push(this.kkDpsCat);


}

ionViewDidEnter() {
		this.timeleft=calcTimeleft(this.dpickCat.data,this.oopenCat.data);
	}
}
