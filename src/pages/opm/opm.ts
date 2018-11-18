/* node */


import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { catData } from '../../utils/types';
import { ParentPage } from '../parent/parent';
import { calcTimeleft } from '../../utils/func';

/*
*
 * Generated class for the OpmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */





//@IonicPage()
@Component({
  selector: 'page-opm',
  templateUrl: 'opm.html'
})
export class OpmPage extends ParentPage{

	comCat: catData;
	depCat: catData;
	comfCat: catData;
	depfCat: catData;
	oprioCat: catData;
	oopenCat: catData;
	oopennCat: catData;
	stTryCat: catData;
	rsTryCat: catData;
	stHbwCat: catData;
	saleCat: catData;
	



  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
	super(navCtrl,navParams,EvsCall);


	this.comCat=new catData('com');
	this.depCat =new catData('dep');  
	this.comfCat=new catData('comf');
	this.depfCat=new catData('depf');
	this.oprioCat=new catData('oprio');  
	this.oopenCat=new catData('oopen');
	this.oopennCat=new catData('oopenn');
	this.stTryCat=new catData('stTry');
	this.rsTryCat=new catData('rsTry');
	this.stHbwCat=new catData('stHbw');
	this.saleCat=new catData('sale');

	this.CatCol.push(this.comCat);
	this.CatCol.push(this.depCat);
	this.CatCol.push(this.comfCat);
	this.CatCol.push(this.depfCat);
	this.CatCol.push(this.oprioCat);  
	this.CatCol.push(this.oopenCat);
	this.CatCol.push(this.oopennCat);
	this.CatCol.push(this.stTryCat);
	this.CatCol.push(this.rsTryCat);
	this.CatCol.push(this.stHbwCat);
	this.CatCol.push(this.saleCat);


  }
ionViewDidEnter() {
		this.timeleft=calcTimeleft(this.comCat.data,this.oopenCat.data);
	}
	
} 
