import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';
import 'chartjs-plugin-datalabels';

import { graphBar } from '../../utils/func';
import { getColor, getInfo, getExt} from '../../utils/func';
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
	showheight: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
	//super(navCtrl, navParams, EvsCall);  
	this.CatCol=new Array<catData>();  
	 setInterval(()=>{this.load();},60000);
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
	this.showheight='20%';
	this.CatCol.forEach( (cat) => {

	cat.select = area ==cat.name ? '#f0f0f0' : '#ffffff';
	});
	

	//if(this.lineChart==null){ 
	//} 
	//else{
	//this.lineChart.destroy();
	
	//	}
		
	this.actGraph(area);
	}	

 actGraph= (area : string): void  =>{
	let drawGraph= ( area : string): void =>{ 
		var data = {
		  labels: [     `${getInfo(this.hbwCat.name)};Platz;Kanal`,
			        `${getInfo(this.tryCat.name)};Platz;Kanal`,
				`${getInfo(this.excCat.name)};Platz;Kanal`,
				`${getInfo(this.sebCat.name)};Platz;Kanal`,
				`DPS Fuellgrad;Platz;Kanal`
		           ],
		  datasets: [{
		    label: "Platz",
		    backgroundColor: [
				getColor(this.hbwCat.name),
				getColor(this.tryCat.name),
				getColor(this.excCat.name),
				getColor(this.sebCat.name),
				"#0066ff"
			        ],

		    data: [
				   this.hbwCat.data,
				   this.tryCat.data,
				   this.excCat.data,
				   this.sebCat.data,
				   this.dpsCat.data
				    ],
		  }, {
		    label: "Kanal",
		    backgroundColor: [
				getExt(this.hbwCat.name),
				getExt(this.tryCat.name),
				getExt(this.excCat.name),
				getExt(this.sebCat.name),
				"#0047b3"
			        ],


		    data: [
				this.hbwCat.datasec,
				this.tryCat.datasec,
				this.excCat.datasec,
				this.sebCat.datasec,
				this.dpsCat.datasec
					    ],

		  }
		  ]
		};
		
		this.lineChart =
			 new Chart(this.lineCanvas.nativeElement,graphBar(data, area)
		);

		
		
	}

		drawGraph(area);
}
}
