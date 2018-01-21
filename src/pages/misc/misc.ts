import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';


import { colorGet,graphBar,newCat } from '../../utils/func';
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
export class MiscPage {
	@ViewChild('lineCanvas') lineCanvas;
	barChart:any;
	EvsData: any;
	hbwCat: catData;
	tryCat: catData;
	excCat: catData;
	sebCat: catData;
	dpsCat: catData;

	CatCol: Array<catData>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private EvsCall : EvscallProvider) {
	this.CatCol=new Array<catData>();  
	this.hbwCat=new catData('hbw');
	this.tryCat=new catData('try');  
	this.excCat=new catData('exc');
	this.sebCat=new catData('seb');
	this.dpsCat=new catData('dps');

	this.CatCol.push(this.hbwCat);
	this.CatCol.push(this.tryCat);
	this.CatCol.push(this.excCat);
	this.CatCol.push(this.sebCat);
	this.CatCol.push(this.dpsCat);


  }
ionViewDidLoad(){

	this.EvsCall.getFill().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;

	this.hbwCat.data=EvsData.getFillListResult[1].locfill/100;
	this.hbwCat.datasec=EvsData.getFillListResult[1].chanfill/100;
	this.tryCat.data=EvsData.getFillListResult[2].locfill/100;
	this.tryCat.datasec=EvsData.getFillListResult[2].chanfill/100;
        this.excCat.data=EvsData.getFillListResult[3].locfill/100;   
        this.excCat.datasec=EvsData.getFillListResult[3].chanfill/100;   
	this.sebCat.data=EvsData.getFillListResult[4].locfill/100;   
	this.sebCat.datasec=EvsData.getFillListResult[4].chanfill/100;   

	this.CatCol= this.CatCol.map( (cat) : catData => {
	var obj = EvsData.getFillResult.find( (data) => data.area.ToLower()===cat.name);
	cat.data=obj.locfill/100;
    	cat.datasec=obj.chanfill/100;
	return cat;	
	}
	)
	;
	
	  
	console.log(this.hbwCat.data);
     });
  this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;

	this.dpsCat.data=EvsData.getPerfEntityResult.kkinvdpsinv/56000;   
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
			'default': () => {return 
		      	[
			this.hbwCat.data,this.hbwCat.datasec,
			this.tryCat.data,this.tryCat.datasec,
			this.excCat.data,this.excCat.datasec,
			this.sebCat.data,this.sebCat.datasec,
			this.dpsCat.data,this.dpsCat.datasec
			]	
			}}; 
		
			return (data[area]||data['default'])();	
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
