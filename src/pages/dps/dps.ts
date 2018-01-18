/* node */

import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';
import { colorGet,graphOpt,newCat } from '../../utils/func';
import { catData } from '../../utils/types';
/*
*
 * Generated class for the DpsPage page.
 *
 * See https://ionicframework.dpick/docs/dpickponents/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dps',
  templateUrl: 'dps.html'
})
export class DpsPage {
	@ViewChild('lineCanvas') lineCanvas;
	lineChart:any;
	EvsData:any;	

	dpickCat: catData;
	drpckCat: catData;
	dpuserCat: catData;
	druserCat: catData;
	oopenCat: catData;
	oopennCat: catData;
	stInlCat: catData;
	saInlCat: catData;
	kkHbwCat: catData;
	kkDpsCat: catData;

	CatCol: Array<catData>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private EvsCall : EvscallProvider) {
	this.CatCol=new Array<catData>();  
	this.dpickCat=new catData('dpick');
	this.drpckCat =new catData('drpck');  
	this.dpuserCat=new catData('dpuser');
	this.druserCat=new catData('druser');
	this.oopenCat=new catData('oopen');
	this.oopennCat=new catData('oopenn');
	this.stInlCat=new catData('stInl');
	this.saInlCat=new catData('saInl');
	this.kkHbwCat=new catData('kkHbw');
	this.kkDpsCat=new catData('kkDps');

	this.CatCol.push(this.dpickCat);
	this.CatCol.push(this.drpckCat);
	this.CatCol.push(this.dpuserCat);
	this.CatCol.push(this.druserCat);
	this.CatCol.push(this.oopenCat);
	this.CatCol.push(this.oopennCat);
	this.CatCol.push(this.stInlCat);
	this.CatCol.push(this.saInlCat);
	this.CatCol.push(this.kkHbwCat);
	this.CatCol.push(this.kkDpsCat);


  }
  ionViewDidLoad() {

   this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	console.log(EvsData);

	this.dpickCat.data=EvsData.getPerfEntityResult.dpickuserperf;
	this.drpckCat.data=EvsData.getPerfEntityResult.drpckuserperf;
	this.dpuserCat.data=EvsData.getPerfEntityResult.dpickcnt;
	this.druserCat.data=EvsData.getPerfEntityResult.drpckcnt;
	this.oopenCat.data=EvsData.getPerfEntityResult.dopen;
	this.oopennCat.data=EvsData.getPerfEntityResult.dopen2;
	this.stInlCat.data=EvsData.getPerfEntityResult.inlaysinv;
	this.saInlCat.data=EvsData.getPerfEntityResult.inlaysabv;
	this.kkHbwCat.data=EvsData.getPerfEntityResult.kkstackhbwinv;
	this.kkDpsCat.data=EvsData.getPerfEntityResult.kkemptydpsinv;
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
