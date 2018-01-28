/* node */

import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';
import { colorGet,graphOpt,newCat } from '../../utils/func';
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
	oopenCat: catData;
	oopennCat: catData;
	stInlCat: catData;
	saInlCat: catData;
	kkHbwCat: catData;
	kkDpsCat: catData;



  constructor(public navCtrl: NavController, public navParams: NavParams, private EvsCall : EvscallProvider) {

	super(navCtrl,navParams,EvsCall);

	this.dpickCat=new catData('dpick');
	this.drpckCat =new catData('drpck');  
	this.dpuserCat=new catData('dpuser');
	this.druserCat=new catData('druser');
	this.oopenCat=new catData('oopen');
	this.oopennCat=new catData('oopenn');
	this.stInlCat=new catData('stInl');
	this.saInlCat=new catData('saInl');
	this.kkHbwCat=new catData('kkHbw');
	this.kkDpsCat=new catData('kkDps');

	this.CatCol.push(this.dpickCat);
	this.CatCol.push(this.drpckCat);
	this.CatCol.push(this.dpuserCat);
	this.CatCol.push(this.druserCat);
	this.CatCol.push(this.oopenCat);
	this.CatCol.push(this.oopennCat);
	this.CatCol.push(this.stInlCat);
	this.CatCol.push(this.saInlCat);
	this.CatCol.push(this.kkHbwCat);
	this.CatCol.push(this.kkDpsCat);


}

}
