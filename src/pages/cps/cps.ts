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
	cmanCat: catData;
	causerCat: catData;
	cduserCat: catData;
	cmuserCat: catData;
	caprioCat: catData;
	cdprioCat: catData;
	cmprioCat: catData;
	caopenCat: catData;
	caopennCat: catData;
	cdopenCat: catData;
	cdopennCat: catData;
	cmopenCat: catData;
	cmopennCat: catData;

	cdtimeleft: string;	
	cmtimeleft: string;	


  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {

	super(navCtrl,navParams,EvsCall);
	this.cpickCat=new catData('cpsa');
	this.cdspCat =new catData('cpsd');  
	this.cmanCat =new catData('cpsm');  
	this.causerCat=new catData('cpsacnt');
	this.cduserCat=new catData('cpsdcnt');
	this.cmuserCat=new catData('cpsmcnt');
	this.caprioCat=new catData('caprio');
	this.cdprioCat=new catData('cdprio');
	this.cmprioCat=new catData('cmprio');
	this.caopenCat=new catData('caopen');
	this.caopennCat=new catData('caopenn');
	this.cdopenCat=new catData('cdopen');
	this.cdopennCat=new catData('cdopenn');
	this.cmopenCat=new catData('cmopen');
	this.cmopennCat=new catData('cmopenn');

	this.CatCol.push(this.cpickCat);
	this.CatCol.push(this.cdspCat);
	this.CatCol.push(this.cmanCat);
	this.CatCol.push(this.causerCat);
	this.CatCol.push(this.cduserCat);
	this.CatCol.push(this.cmuserCat);
	this.CatCol.push(this.caprioCat);
	this.CatCol.push(this.cdprioCat);
	this.CatCol.push(this.cmprioCat);
	this.CatCol.push(this.caopenCat);
	this.CatCol.push(this.caopennCat);
	this.CatCol.push(this.cdopenCat);
	this.CatCol.push(this.cdopennCat);
	this.CatCol.push(this.cmopenCat);
	this.CatCol.push(this.cmopennCat);


  }

	
ionViewDidEnter() {
		this.timeleft=calcTimeleft(this.cpickCat.data,this.caopenCat.data);
		this.cdtimeleft=calcTimeleft(this.cdspCat.data,this.cdopenCat.data);
		this.cmtimeleft=calcTimeleft(this.cmanCat.data,this.cmopenCat.data);
	}
}

