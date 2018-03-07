import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';


import { graphBar } from '../../utils/func';
import { perfDataListFunc,perfDataEntFunc,parseDateTime,perfDataLastFunc, graphOpt } from '../../utils/func';
import { catData } from '../../utils/types';
/**
 * Generated class for the MiscPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-misc',
  templateUrl: 'misc.html',
})
export class MiscPage{
	@ViewChild('lineCanvas') lineCanvas;
	lineChart:any;
	EvsData:any;
	CatCol: Array<catData>;

	hbwCat: catData;
	tryCat: catData;
	excCat: catData;
	sebCat: catData;
	dpsCat: catData;

	spacer: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
	//super(navCtrl, navParams, EvsCall);  
	this.CatCol=new Array<catData>();  
	 setInterval(()=>{this.load();},60000);
	this.hbwCat=new catData('hbw');
	this.tryCat=new catData('opm');  
	this.excCat=new catData('exc');
	this.sebCat=new catData('seb');
	this.dpsCat=new catData('dps');

	this.CatCol.push(this.hbwCat);
	this.CatCol.push(this.tryCat);
	this.CatCol.push(this.excCat);
	this.CatCol.push(this.sebCat);
	this.CatCol.push(this.dpsCat);
	this.spacer="  -  ";

  }
ionViewWillEnter(){

	this.load();
}	
load= () : void =>{

	this.EvsCall.getFill().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;


	this.CatCol= this.CatCol.map( (cat) : catData => {
	if(cat.name!=='dps'){	
		var obj = EvsData.getFillListResult.find( (data) => {return data.area.toLowerCase()===cat.name});
		cat.data=obj.locfill;
		cat.datasec=obj.chanfill;
		return cat;	
		}
	else
		{
		
		  this.EvsCall.getData().subscribe(EvsData=>{
			this.EvsData= EvsData.current_observation;

			cat.data=Math.round(EvsData.getPerfEntityResult.kkinvdpsinv/560);
			cat.datasec=cat.data;  
		     });
		
		return cat;
		}

	}
	)
	;
	
     });




}
 actSelect=(area : string): void =>
	{
	this.CatCol.forEach( (cat) => {

	cat.select = area ==cat.name ? '#f0f0f0' : '#ffffff';
	});
	
	if(this.lineChart==null){} 
		else{this.lineChart.destroy();}
			
	this.actGraph(area);
	}	


 actGraph= (area : string): void  =>{
	let drawGraph= ( area : string): void =>{ 
		const perfdatafunc= (area: string) : any => {
			let data= [
			this.hbwCat.data,this.hbwCat.datasec,
			this.tryCat.data,this.tryCat.datasec,
			this.excCat.data,this.excCat.datasec,
			this.sebCat.data,this.sebCat.datasec,
			this.dpsCat.data,this.dpsCat.datasec
			]; 
		
			return (data);	
		}
	        var perfdata = perfdatafunc(area);
		var labeldata  = 		
			[`${this.hbwCat.name} Platz`,`${this.hbwCat.name} Kanal`,
			   `${this.tryCat.name} Platz`,`${this.tryCat.name} Kanal`,
				`${this.excCat.name} Platz`,`${this.excCat.name} Kanal`,
				`${this.sebCat.name} Platz`,`${this.sebCat.name} Kanal`,
				`${this.dpsCat.name} Platz`,`${this.dpsCat.name} Kanal`
			];			
		
		this.lineChart =
			 new Chart(this.lineCanvas.nativeElement,graphBar(labeldata, perfdata, area)
		);
	}
		drawGraph(area);
}
}
