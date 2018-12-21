import { Component,  ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';
import { perfDataListFunc,perfDataEntFunc,formatTime,perfDataLastFunc, graphOpt, parseDateTime } from '../../utils/func';
import { catData } from '../../utils/types';
/**
 * Generated class for the ParentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
(<any>window).showit="off";
(<any>window).showicon="symboloff";


@IonicPage()
@Component({
  selector: 'page-parent',
  templateUrl: 'parent.html'
})
export class ParentPage {
	EvsData:any;
	ErrorData: any;
	CatCol: Array<catData>;
	timeleft: string;	
	stateInfo: string;
	state: string;

	
  constructor(public navCtrl: NavController, public navParams: NavParams,public EvsCall : EvscallProvider) {
	this.CatCol=new Array<catData>();  
	 setInterval(()=>{this.load();},60000);

  }

 ionViewWillEnter() {
	 this.load();
     }
load= () : void =>{
this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	this.CatCol.map((cat)=>{ cat.data=perfDataEntFunc(cat.name,EvsData) });
	var ttime = new Date();
	this.stateInfo=`Aktualisiert: ${formatTime(ttime,"hour")+":"+formatTime(ttime,"min")}`;
	this.state="stateok";

     },
	error => {this.stateInfo=`Error: ${error.status} Info: ${error.statusText}`;
		  this.state="stateerr";
		 }
	);

   this.EvsCall.getList().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	this.CatCol.map((cat)=>{cat.perfDiff=Math.round(cat.data-perfDataLastFunc(cat.name,EvsData));
				cat.perfDiffCol= cat.perfDiff>0 ? 'secondary' : 'danger'  ;
	});
     });


}	

public actSelect(area : string)
	{
	(<any>window).showit="on";
	(<any>window).showicon="symbolon";
	this.CatCol.forEach( (cat) => {		
	cat.select = area ==cat.name ? '#f0f0f0' : '#ffffff';
	});
	
	}	



}
