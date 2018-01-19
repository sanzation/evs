import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';


import { colorGet,graphOpt,newCat } from '../../utils/func';
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
	this.tryCat =new catData('try');  
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
	this.hbwCat.secdata=EvsData.getFillListResult[1].chanfill/100;
	this.tryCat.data=EvsData.getFillListResult[2].locfill/100;
	this.tryCat.secdata=EvsData.getFillListResult[2].chanfill/100;
        this.excCat.data=EvsData.getFillListResult[3].locfill/100;   
        this.excCat.secdata=EvsData.getFillListResult[3].chanfill/100;   
	this.sebCat.data=EvsData.getFillListResult[4].locfill/100;   
	this.sebCat.secdata=EvsData.getFillListResult[4].chanfill/100;   
	  
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
			'hbw': () => {return  [this.hbwCat.data,this.hbwCat.secData];},
			'seb': () => {return  [this.sebCat.data,this.sebCat.secData];},
			'dps': () => {return  [this.dpsCat.data,this.dpsCat.secData];},
			'exc': () => {return  [this.excCat.data,this.excCat.secData];},
			'try': () => {return  [this.tryCat.data,this.tryCat.secData];},	
			'default': () => {return  [0,0,0,0];}
			}; 
		
			return (data[area]||data['default'])();	
		}
	        var perfdata = perfdatafunc(area);
		var labeldata  = 		
			[this.hbwCat.name,this.tryCat.name,this.excCat.name,this.sebCat.name,this.dpsCat.name];			
		
		this.lineChart =
			 new Chart(this.lineCanvas.nativeElement,graphBar(labeldata, perfdata, area)
		);
	}
		drawGraph(area);
}

}
	

	  }

}
