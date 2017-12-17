/* node */

import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';
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
	dpickPerf:any;
	drpckPerf:any;
	dpickPerfDiff: any;
	dpickPerfDiffColor: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private EvsCall : EvscallProvider) {

  }
  ionViewDidLoad() {
	var gDate=new Date();
	this.lineChart = new Chart(this.lineCanvas.nativeElement, {
	 
		    type: 'line',
		    data: {
			labels: [
			"22:00","23:00","00:00","01:00"			
				],
			datasets: [
			    {
				label: "DPS",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [6500, 5904,3123,5105],
				spanGaps: false,
			    }
			]
		    }
	 
		});

   this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	console.log(EvsData);
	   this.dpickPerf=EvsData.rows[0].elements[0].distance.text;
	   this.drpckPerf=EvsData.rows[0].elements[0].distance.value;

     });

  }DpsPage
ionViewWillEnter()
	{
 console.log('ionViewWillEnter DpsPage');

	this.dpickPerfDiff=Math.random() * (1 + 2) - 2;

	if(this.dpickPerfDiff>0)
	  {
	  this.dpickPerfDiffColor='danger';
	  }
	  else
	  {
	  this.dpickPerfDiffColor='secondary';
	  }


	}

}
