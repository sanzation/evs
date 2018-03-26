import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EvscallProvider } from '../../providers/evscall/evscall';
/**
 * Generated class for the CamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cams',
  templateUrl: 'cams.html',
})
export class CamsPage {
	camList : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
  }

ionViewWillEnter(){

	this.load();
}	
load= () : void =>{
	this.EvsCall.getCam().subscribe(EvsData=>{
			this.EvsData= EvsData.current_observation;
			this.camList=EvsData.getCamListResult;
		     },
	error => {this.stateInfo=`Error: ${error.status} Info: ${error.statusText}`;
		  this.state="stateerr";
		 }
	);
	
}
camSelect(cam : Cam){

}	

}
