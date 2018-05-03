import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EvscallProvider } from '../../providers/evscall/evscall';
import { opData } from '../../utils/types';
import { formatTime, parseDate, dataEntFunc } from '../../utils/func';
import { OpdetailPage } from '../opdetail/opdetail';
/**
 * Generated class for the OpparentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opparent',
  templateUrl: 'opparent.html',
})
export class OpparentPage {
	
	opList : Array<opData>;
	EvsData: any;
	stateInfo: string;
	state: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
	this.opList=new Array<opData>();  
  }

load=(type : string) : void => {
	this.EvsCall.getOp(type).subscribe((EvsData)=>{
	this.EvsData= EvsData.current_observation;
	this.opList=EvsData.getOpListResult.map((data)=>{return new opData(
		data.ident, data.type, data.source, data.comment, data.cnt, parseDate(data.gendate),data.opindex,data.data,data.info)});	
	var ttime = new Date();
	this.stateInfo=`Aktualisiert: ${formatTime(ttime,"hour")+":"+formatTime(ttime,"min")}`;
	this.state="stateok";
	},
	
	error => {this.stateInfo=`Error: ${error.status} Info: ${error.statusText}`;
		  this.state="stateerr";
		 }
	);
	
	//this.opList=this.EvsCall.getOp(type);
}
opSelect(op : opData){
	this.navCtrl.push(OpdetailPage,{first: op});
}	

}
