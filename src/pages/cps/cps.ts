/* node */

import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';
import { colorGet,graphOpt,newCat } from '../../utils/func';
import { catData } from '../../utils/types';
/
/*
*
 * Generated class for the CpsPage page.
 *
 * See https://ionicframework.cpsauto/docs/cpsautoponents/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cps',
  templateUrl: 'cps.html'
})
export class CpsPage {
	@ViewChild('lineCanvas') lineCanvas;
	lineChart:any;
	EvsData:any;	

	cpickCat: catData;
	cdspCat: catData;
	cpuserCat: catData;
	cduserCat: catData;
	oopenCat: catData;
	oopennCat: catData;

	CatCol: Array<catData>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private EvsCall : EvscallProvider) {
	this.CatCol=new Array<catData>();  
	this.cpickCat=new catData('dpick');
	this.cdspCat =new catData('drpck');  
	this.cpuserCat=new catData('dpuser');
	this.cduserCat=new catData('druser');
	this.oopenCat=new catData('oopen');
	this.oopennCat=new catData('oopenn');

	this.CatCol.push(this.dpickCat);
	this.CatCol.push(this.drpckCat);
	this.CatCol.push(this.dpuserCat);
	this.CatCol.push(this.druserCat);
	this.CatCol.push(this.oopenCat);
	this.CatCol.push(this.oopennCat);


  }
  ionViewDidLoad() {

   this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	console.log(EvsData);
	   this.cpickCat.data=EvsData.rows[0].elements[0].distance.text;
	   this.cCat.data=EvsData.rows[0].elements[0].distance.value;

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
