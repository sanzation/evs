import { Component, ViewChild } from '@angular/core';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { getInfo, getColor, getExt, graphBar } from '../../utils/func';
import { catData } from '../../utils/types';
import { EventProvider } from '../../providers/eventprovider/eventprovider';
import { Chart } from 'chart.js';
//import { ChartDataLabels } from 'chartjs-plugin-datalabels';

@Component({
  selector: 'evs-barfooter',
  templateUrl: 'evs-barfooter.html'
})
export class EvsBarfooterComponent {

	bshowit: string;
	@ViewChild('barCanvas') barCanvas;
	barChart: any;


constructor(public EvsCall : EvscallProvider, public Event : EventProvider) {
    this.bshowit="off";
 }
hidefooter = () : void =>{
	this.bshowit="off";
}
showfooter = () : void =>{
	this.bshowit="on";
}
destroyChart = () : void =>{
		if(this.barChart==null){} 
		else{this.barChart.destroy();}
}
actGraph= (area1 : catData,area2 : catData, area3 : catData, area4 : catData, area5 : catData ): void  =>{

	this.destroyChart();

	let drawGraph= (): void =>{ 
		var data = {
		  labels: [     `${getInfo(area1.name)};Loc;Cha`,
			        `${getInfo(area2.name)};Loc;Cha`,
				`${getInfo(area3.name)};Loc;Cha`,
				`${getInfo(area4.name)};Loc;Cha`,
				`DPS;Loc;Cha`
		           ],
		  datasets: [{
		    label: "Platz",
		    backgroundColor: [
				getColor(area1.name),
				getColor(area2.name),
				getColor(area3.name),
				getColor(area4.name),
				"#0066ff"
			        ],

		    data: [
				   area1.data,
				   area2.data,
				   area3.data,
				   area4.data,
				   area5.data
				    ],
		  }, {
		    label: "Kanal",
		    backgroundColor: [
				getExt(area1.name),
				getExt(area2.name),
				getExt(area3.name),
				getExt(area4.name),
				"#0047b3"
			        ],


		    data: [
				area1.datasec,
				area2.datasec,
				area3.datasec,
				area4.datasec,
				area5.datasec
					    ],

		  }
		  ]
		};
		
		this.barChart =
			 new Chart(this.barCanvas.nativeElement,graphBar(data)
		);

		
		
	}

		drawGraph();
}

}
