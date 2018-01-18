/* node */

import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';
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
export class WaPage {
	@ViewChild('lineCanvas') lineCanvas;
	lineChart:any;
	EvsData:any;	

	fillCat: catData;
	fill91Cat: catData;
	fill92Cat: catData;
	openCat: catData;
	open91Cat: catData;
	open92Cat: catData;

	CatCol: Array<catData>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private EvsCall : EvscallProvider) {
	this.CatCol=new Array<catData>();  
	this.fillCat=new catData('fill');
	this.fill91Cat =new catData('fill91');  
	this.fill92Cat=new catData('fill92');
	this.openCat=new catData('open');
	this.open91Cat=new catData('open91');
	this.open92Cat=new catData('open92');

	this.CatCol.push(this.fillCat);
	this.CatCol.push(this.fill91Cat);
	this.CatCol.push(this.fill92Cat);
	this.CatCol.push(this.openCat);
	this.CatCol.push(this.open91Cat);
	this.CatCol.push(this.open92Cat);


  }
  ionViewDidLoad() {

   this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	console.log(EvsData);

	this.fillCat.data=EvsData.getPerfEntityResult.fillperf;
	this.fill91Cat.data=EvsData.getPerfEntityResult.fill91perf;   
	this.fill92Cat.data=EvsData.getPerfEntityResult.fill_errorcnt;   
	this.openCat.data=EvsData.getPerfEntityResult.fill91_errorcnt;   
	this.open91Cat.data=EvsData.getPerfEntityResult.oopen;   
	this.open92Cat.data=EvsData.getPerfEntityResult.oopen2;   
	  
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
			'fill': () => {return  [1234,8700,1233,7999];},
			'fill91': () => {return  [5674,122,4505,423];},
			'open': () => {return  [96964,43434,59544,13490];},
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
