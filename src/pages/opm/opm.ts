/* node */


import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';
import { colorGet,graphOpt,newCat,perfDataListFunc,perfDataEntFunc,parseDateTime } from '../../utils/func';
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

	this.CatCol.map((cat)=>{ cat.data=perfDataEntFunc(cat.name,EvsData) });

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
		this.EvsCall.getList().subscribe((EvsData)=>{
			
			var perfData = perfDataListFunc(area, EvsData);
			var values =perfData.map((data)=>{return parseInt(data.val,10)});
			var labeldata= perfData.map((data)=>{return parseDateTime(data.date)});	
		        var avgPerf = Math.round(values.reduce((a,b)=>{return a+b})/values.length,0);
		        var maxPerf = values.reduce((a,b)=>{return a>b? a : b});
			this.lineChart =
				 new Chart(this.lineCanvas.nativeElement,graphOpt(labeldata, values, area, avgPerf, maxPerf));
		});

	}
		drawGraph(area);
}

}
