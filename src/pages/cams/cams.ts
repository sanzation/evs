import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EvscallProvider } from '../../providers/evscall/evscall';
import { camData } from '../../utils/types';
import { CamDetailPage } from '../cam-detail/cam-detail';
import { formatTime, dataEntFunc } from '../../utils/func';
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
	camList : Array<camData>;
	stateInfo: string;
	EvsData:any;
	state: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
	 this.camList =new Array<camData>();
	 setInterval(()=>{this.load();},60000);

  }

ionViewWillEnter(){

	this.load();
}	
load= () : void =>{
	this.EvsCall.getCam().subscribe(EvsData=>{
			this.EvsData= EvsData.current_observation;
			this.camList=EvsData.getCamListResult.map((data)=>{ return new camData(data.ident,data.url)});
			var ttime = new Date();
			this.stateInfo=`Aktualisiert: ${formatTime(ttime,"hour")+":"+formatTime(ttime,"min")}`;
			this.state="stateok";
		     },
	error => {this.stateInfo=`Error: ${error.status} Info: ${error.statusText}`;
		  this.state="stateerr";
		 }
	);
	
}
camSelect(cam : camData){
 this.navCtrl.push(CamDetailPage, {first: cam}); 
}	

}
