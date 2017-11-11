/* node */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
/*
*
 * Generated class for the OpmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opm',
  templateUrl: 'opm.html'
})
export class OpmPage {
	EvsData:any;	
	comPerf:any;
	depPerf:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private EvsCall : EvscallProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpmPage');
   this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	console.log(EvsData);
	   this.comPerf=EvsData.rows[0].elements[0].distance.text;
	   this.depPerf=EvsData.rows[0].elements[0].distance.value;

     });

  }OpmPage

}
