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
	oopenCat: catData;
	oopennCat: catData;



  constructor(public navCtrl: NavController, public navParams: NavParams, private EvsCall : EvscallProvider) {

	super(navCtrl,navParams,EvsCall);
	this.cpickCat=new catData('cpick');
	this.cdspCat =new catData('cdsp');  
	this.cpuserCat=new catData('cpuser');
	this.cduserCat=new catData('cduser');
	this.oopenCat=new catData('oopen');
	this.oopennCat=new catData('oopenn');

	this.CatCol.push(this.cpickCat);
	this.CatCol.push(this.cdspCat);
	this.CatCol.push(this.cpuserCat);
	this.CatCol.push(this.cduserCat);
	this.CatCol.push(this.oopenCat);
	this.CatCol.push(this.oopennCat);


  }
}

