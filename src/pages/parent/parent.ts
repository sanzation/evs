import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';
import { perfDataListFunc,perfDataEntFunc,parseDateTime,perfDataLastFunc, graphOpt } from '../../utils/func';
import { catData } from '../../utils/types';
/**
 * Generated class for the ParentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parent',
  templateUrl: 'parent.html'
})
export class ParentPage {
	@ViewChild('lineCanvas') lineCanvas;
	lineChart:any;
	EvsData:any;
	CatCol: Array<catData>;
	timeleft: string;			
	
  constructor(public navCtrl: NavController, public navParams: NavParams,public EvsCall : EvscallProvider) {
	this.CatCol=new Array<catData>();  
	 setInterval(()=>{this.load();},60000);
  }


 ionViewWillEnter() {
	 this.load();
     }
load= () : void =>{
	console.log('load data');
this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	this.CatCol.map((cat)=>{ cat.data=perfDataEntFunc(cat.name,EvsData) });
     });

   this.EvsCall.getList().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	this.CatCol.map((cat)=>{cat.perfDiff=Math.round(cat.data-perfDataLastFunc(cat.name,EvsData));
				cat.perfDiffCol= cat.perfDiff>0 ? 'secondary' : 'danger'  ;
	});
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
		this.EvsCall.getList().subscribe((EvsData)=>{
			
			var perfData = perfDataListFunc(area, EvsData);
			var values =perfData.map((data)=>{return parseInt(data.val,10)});
			var labeldata= perfData.map((data)=>{return parseDateTime(data.date)});	
		        var avgPerf : string =`${Math.round(values.reduce((a,b)=>{return a+b})/values.length,0)}`;
		        var maxPerf : string =`${values.reduce((a,b)=>{return a>b? a : b})}`;
			this.lineChart =
				 new Chart(this.lineCanvas.nativeElement,graphOpt(labeldata, values, area, avgPerf, maxPerf));
		});

	}
		drawGraph(area);
}

}
