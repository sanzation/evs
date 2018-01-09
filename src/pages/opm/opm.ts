/* node */


import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';
import { colorGet,graphOpt,newCat } from '../../utils/func';
import { catData } from '../../utils/types';
/*
*
 * Generated class for the OpmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */





@IonicPage()
@Component({
  selector: 'page-opm',
  templateUrl: 'opm.html'
})
export class OpmPage {
	//graph
	@ViewChild('lineCanvas') lineCanvas;
	lineChart:any;
	//data
	EvsData:any;

	comData: any;
	depData: any;
	comfData: any;
	depfData: any;
	oopenData: any;
	oopennData: any;
	stTryData: any;
	rsTryData: any;
	stHbwData: any;
	saleData: any;



	comCat: catData;
	depCat: catData;
	comfCat: catData;
	depfCat: catData;
	oopenCat: catData;
	oopennCat: catData;
	stTryCat: catData;
	rsTryCat: catData;
	stHbwCat: catData;
	saleCat: catData;

	CatCol: Array<catData>;


  constructor(public navCtrl: NavController, public navParams: NavParams, private EvsCall : EvscallProvider) {
	this.CatCol=new Array<catData>();  
	this.comCat=new catData('com');
	this.depCat =new catData('dep');  
	this.comfCat=new catData('comf');
	this.depfCat=new catData('depf');
	this.oopenCat=new catData('oopen');
	this.oopennCat=new catData('oopenn');
	this.stTryCat=new catData('stTry');
	this.rsTryCat=new catData('rsTry');
	this.stHbwCat=new catData('stHbw');
	this.saleCat=new catData('sale');

	this.CatCol.push(this.comCat);
	this.CatCol.push(this.depCat);
	this.CatCol.push(this.comfCat);
	this.CatCol.push(this.depfCat);
	this.CatCol.push(this.oopenCat);
	this.CatCol.push(this.oopennCat);
	this.CatCol.push(this.stTryCat);
	this.CatCol.push(this.rsTryCat);
	this.CatCol.push(this.stHbwCat);
	this.CatCol.push(this.saleCat);


  }
  ionViewDidLoad() {

   this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	console.log(EvsData);
	   this.comData=EvsData.rows[0].elements[0].distance.text;
	   this.depData=EvsData.rows[0].elements[0].distance.value;

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
			'com': () => {return  [1234,8700,1233,7999];},
			'dep': () => {return  [5674,122,4505,423];},
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
