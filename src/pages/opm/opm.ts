/* node */

import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { Chart } from 'chart.js';
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
	@ViewChild('lineCanvas') lineCanvas;
	lineChart:any;
	EvsData:any;	
	comPerf:any;
	depPerf:any;
	comPerfDiff: any;
	comPerfDiffColor: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private EvsCall : EvscallProvider) {

  }
  ionViewDidLoad() {

	this.lineChart = new Chart(this.lineCanvas.nativeElement, {
	 
		    type: 'line',
		    data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
			    {
				label: "My First dataset",
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
				data: [65, 59, 80, 81, 56, 55, 40],
				spanGaps: false,
			    }
			]
		    }
	 
		});

   this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	console.log(EvsData);
	   this.comPerf=EvsData.rows[0].elements[0].distance.text;
	   this.depPerf=EvsData.rows[0].elements[0].distance.value;

     });

  }OpmPage
ionViewWillEnter()
	{
 console.log('ionViewWillEnter OpmPage');

	this.comPerfDiff=Math.random() * (1 + 2) - 2;

	if(this.comPerfDiff>0)
	  {
	  this.comPerfDiffColor='danger';
	  }
	  else
	  {
	  this.comPerfDiffColor='secondary';
	  }


	}

}
