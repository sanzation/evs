/* node */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EvscallProvider } from '../../providers/evscall/evscall';
import { catData } from '../../utils/types';
import { ParentPage } from '../parent/parent';
/*
*
 * Generated class for the WaPage page.
 *
 * See https://ionicframework.fill/docs/fillponents/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wa',
  templateUrl: 'wa.html'
})
export class WaPage extends ParentPage {

	fillCat: catData;
	fill91Cat: catData;
	fill92Cat: catData;
	openCat: catData;
	open91Cat: catData;
	open92Cat: catData;



  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
	super(navCtrl, navParams, EvsCall) ;

	this.fillCat=new catData('ocbfill');
	this.fill91Cat =new catData('ocbfill91');  
	this.fill92Cat=new catData('ocbfill92');
	this.openCat=new catData('ocbopen');
	this.open91Cat=new catData('ocbopen91');
	this.open92Cat=new catData('ocbopen92');

	this.CatCol.push(this.fillCat);
	this.CatCol.push(this.fill91Cat);
	this.CatCol.push(this.fill92Cat);
	this.CatCol.push(this.openCat);
	this.CatCol.push(this.open91Cat);
	this.CatCol.push(this.open92Cat);


  }
}
