import { Component, Input } from '@angular/core';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';
import { perfDataListFunc,perfDataEntFunc,formatTime,perfDataLastFunc, graphOpt, parseDateTime } from '../../utils/func';
import { catData } from '../../utils/types';
/**
 * Generated class for the EvsFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'evs-footer',
  templateUrl: 'evs-footer.html'
})
export class EvsFooterComponent  {
	showit: string;
	@ViewChild('lineCanvas') lineCanvas;
	lineChart:any;


constructor(public EvsCall : EvscallProvider) {
    this.showit="off";
    (<any>window).showit="off";
 }
hidefooter = () : void =>{
	this.showit="off";
	(<any>window).showit="off";
}
showfooter = () : void =>{
		this.showit="on";
		(<any>window).showit="on";
}
graphForSelect = () : void => {
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
		        var avgPerf : string =`${Math.round(values.reduce((a,b)=>{return a+b})/values.length)}`;
		        var maxPerf : string =`${values.reduce((a,b)=>{return a>b? a : b})}`;
			this.lineChart =
				 new Chart(this.lineCanvas.nativeElement,graphOpt(labeldata, values, area, avgPerf, maxPerf));
		});

	}
	drawGraph(area);
}
}
