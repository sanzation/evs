/* node */

import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';

import { colorGet,graphOpt,newCat } from '../../utils/func';
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
export class WePage {
	@ViewChild('lineCanvas') lineCanvas;
	lineChart:any;
	EvsData:any;	

	wepalhCat: catData;
	wepaldCat: catData;
	wevarhCat: catData;
	wevardCat: catData;

	CatCol: Array<catData>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private EvsCall : EvscallProvider) {
	this.CatCol=new Array<catData>();  
	this.wepalhCat=new catData('wepalh');
	this.wepaldCat =new catData('wepald');  
	this.wevarhCat=new catData('wevarh');
	this.wevardCat=new catData('wevard');

	this.CatCol.push(this.wepalhCat);
	this.CatCol.push(this.wepaldCat);
	this.CatCol.push(this.wevarhCat);
	this.CatCol.push(this.wevardCat);


  }
  ionViewDidLoad() {

   this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	console.log(EvsData);

	this.wepalhCat.data=EvsData.getPerfEntityResult.wepal_hour;
	this.wepaldCat.data=EvsData.getPerfEntityResult.wepal_day;
	this.wevarhCat.data=EvsData.getPerfEntityResult.wevara_hour;
	this.wevardCat.data=EvsData.getPerfEntityResult.wevara_day;

     });


  }


ionViewWillEnter()
	{
		this.CatCol.forEach( (cat) =>
			{
			cat.perfDiff=Math.random() * (1 + 2) - 2;
			cat.perfDiffCol= cat.perfDiff>0 ? 'secondary' : 'danger'  ;
			});

	}

const actSelect=(area : string): void =>
	{
	
	this.CatCol.forEach( (cat) => {		
	cat.select = area ==cat.name ? '#f0f0f0' : '#ffffff';
	});
	
	if(this.lineChart==null){} 
		else{this.lineChart.destroy();}
			
	this.actGraph(area);
	}	


const actGraph= (area : string): void  =>{
	let drawGraph= ( area : string): void =>{ 
		const perfdatafunc= (area: string) : any => {
			let data= {
			'dpick': () => {return  [1234,8700,1233,7999];},
			'drpck': () => {return  [5674,122,4505,423];},
			'oopen': () => {return  [96964,43434,59544,13490];},
			'default': () => {return  [0,0,0,0];}
			}; 
		
			return (data[area]||data['default'])();	
		}
	        var perfdata = perfdatafunc(area);
		var labeldata  = 		
			["22:00","23:00","00:00","01:00"];			
		
		this.lineChart =
			 new Chart(this.lineCanvas.nativeElement,graphOpt(labeldata, perfdata, area)
		);
	}
		drawGraph(area);
}

}
