/* node */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { ParentPage } from '../parent/parent';
import { catData } from '../../utils/types';
/*
*
 * Generated class for the WePage page.
 * See https://ionicframework.wepalh/docs/wepalhponents/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-we',
  templateUrl: 'we.html'
})
export class WePage extends ParentPage{

	wepalhCat: catData;
	wepaldCat: catData;
	wevarhCat: catData;
	wevardCat: catData;



  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
	super(navCtrl,navParams,EvsCall);
  	  this.wepalhCat=new catData('wepalh');
	this.wepaldCat =new catData('wepald');  
	this.wevarhCat=new catData('wevarh');
	this.wevardCat=new catData('wevard');

	this.CatCol.push(this.wepalhCat);
	this.CatCol.push(this.wepaldCat);
	this.CatCol.push(this.wevarhCat);
	this.CatCol.push(this.wevardCat);


  }
} 
