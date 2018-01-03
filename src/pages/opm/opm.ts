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

const actSelect=(area : string): void =>
	{

	this.comCat.select = area =='com' ? '#f0f0f0' : '#ffffff';
	this.depCat.select = area =='dep' ? '#f0f0f0' : '#ffffff';
	this.openCat.select = area =='open' ? '#f0f0f0' : '#ffffff';

	this.actGraph(area);
	};	
const actGraph= (area : string): void =>{
	

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
		const colorget= (area: string,type: number) : string => {
			let data={
				'primary':    () => {return type==1 ? '#16292C' : 'Primär'},
				'secondary':  () => {return type==1 ? '#259ee7': 'Sekundär'},
				'danger':     () => {return type==1 ? '#db7712': 'Gefahr'},
				'light':      () => {return type==1 ? '#d8d8d8': 'Leicht'},
				'white':	() => {return type==1 ?  '#ffffff': 'Weiss'},
				'dark':       () => {return type==1 ?  '#545454': 'Dunkel'},
				'com':		() => {return type==1 ? '#002f7c': 'COM Ko/h'},
				'dep':		() => {return type==1 ? '#00707c': 'DEP Ko/h'},
				'slip':		() => {return type==1 ? '#00067c': 'Slipsheet'},
				'opm':		() => {return type==1 ? '#99b3dd': 'OPM'},
				'dps':		() => {return type==1 ? '#d17373': 'DPS'},
				'cps':		() => {return type==1 ? '#9bbb59': 'CPS'},
				'dpick':	() => {return type==1 ? '#7C0000': 'DPS Pick/h'},
				'drpck':	() => {return type==1 ? '#af3b3b': 'DPS Repack/h'},
				'cpsa':		() => {return type==1 ? '#007c18': 'CPS Auto/h'},
				'cpsd':		() => {return type==1 ? '#467c00': 'CPS Display/h'},
				'we':		() => {return type==1 ? '#c164c1': 'WE'},
				'wa':		() => {return type==1 ? '#ccbd7c': 'WA'},
			 	'inlay':	() => {return type==1 ? '#C9AE91': 'Inlay'},
				'kk':		() => {return type==1 ? '#029DDD': 'Klappkisten'},
				'misc':		() => {return type==1 ? '#93a2ba': 'Misc'},
				'default':	() => {return type==1 ? '#ffffff': 'Default'},
				'open':		() => {return type==1 ? '#f4f4f4': 'Offene Auftragskolli heute'},
				'openn':	() => {return type==1 ? '#f9f9f9' : 'Offene Auftragskolli morgen'}
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
				label: colorget(area,2),
				fill: false,
				lineTension: 0.1,
				backgroundColor: colorget(area,1),
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
