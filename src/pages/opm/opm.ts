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

export interface IcatData{
		perfDiff: any;
		perfDiffCol: string;
		select: string;
	};
export class catData implements IcatData{
		perfDiff: any;
		perfDiffCol: string;
		select: string;
}



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
	comPerf:any;
	depPerf:any;
	
	

	comCat: catData;

	depCat: catData;
	comfCat: catData;
	depfCat: catData;
	openCat: catData;
	opennCat: catData;
	stTryCat: catData;
	rsTryCat: catData;
	stHbwCat: catData;
	saleCat: catData;


  constructor(public navCtrl: NavController, public navParams: NavParams, private EvsCall : EvscallProvider) {
	  this.comCat= new catData();
	  this.depCat= new catData();
	  this.openCat= new catData();
  }
  ionViewDidLoad() {


   this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	console.log(EvsData);
	   this.comPerf=EvsData.rows[0].elements[0].distance.text;
	   this.depPerf=EvsData.rows[0].elements[0].distance.value;

     });


  }
ionViewWillEnter()
	{

	this.comCat.perfDiff=Math.random() * (1 + 2) - 2;
	this.comCat.perfDiffCol= this.comCat.perfDiff>0 ?  'danger' : 'secondary';


	}
	
const actGraph= (area : string): void =>{
	
	this.comCat.select = area =='com' ? '#f0f0f0' : '#ffffff';
	this.depCat.select = area =='dep' ? '#f0f0f0' : '#ffffff';
	this.openCat.select = area =='open' ? '#f0f0f0' : '#ffffff';

	let drawGraph= ( area : string): void => {
	
		const perfdatafunc= (area: string) : any => {
			let data= {
			'com': () => {return  [1234,8700,1233,7999];},
			'dep': () => {return  [5674,122,4505,423];},
			'open': () => {return  [96964,43434,59544,13490];},
			'default': () => {return  [0,0,0,0];}
			}; 
		
			return (data[area]||data['default'])();	
		}
		const colorget= (area: string) : string => {
			let data={
				'primary':    () => {return'#16292C'},
				'secondary':  () => {return'#259ee7'},
				'danger':     () => {return'#db7712'},
				'light':      () => {return'#d8d8d8'},
				'white':	() => {return '#ffffff'},
				'dark':       () => {return '#545454'},
				'com':		() => {return'#002f7c'},
				'dep':		() => {return'#00707c'},
				'slip':		() => {return'#00067c'},
				'opm':		() => {return'#99b3dd'},
				'dps':		() => {return'#d17373'},
				'cps':		() => {return'#9bbb59'},
				'dpick':	() => {return'#7C0000'},
				'drpck':	() => {return'#af3b3b'},
				'cpsa':		() => {return'#007c18'},
				'cpsd':		() => {return'#467c00'},
				'we':		() => {return'#c164c1'},
				'wa':		() => {return'#ccbd7c'},
			 	'inlay':	() => {return'#C9AE91'},
				'kk':		() => {return'#029DDD'},
				'misc':		() => {return'#93a2ba'},
				'default':	() => {return'#ffffff'}
			};
			return (data[area]||data['default'])();
		}	
	        var perfdata = perfdatafunc(area);
		var labeldata  = 		
			["22:00","23:00","00:00","01:00"];			
		
		this.lineChart = new Chart(this.lineCanvas.nativeElement, {
	 
		    type: 'line',
		    data: {
			labels: labeldata
				,
			datasets: [
			    {
				label: area,
				fill: false,
				lineTension: 0.1,
				backgroundColor: colorget(area),
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
				data: perfdata,
				spanGaps: false,
			    }
			],
			    
		    },
		 options: {
                    maintainAspectRatio: false,
			legend: {
			    display: true,
			    position: 'top',
				    labels: {
					fontColor: 'rgb(0, 0, 0)'
					    }
				}
                }
		});



		}

	drawGraph(area);

}


}
