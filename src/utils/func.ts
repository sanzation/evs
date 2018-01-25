import { catData, identData } from '../utils/types';

export const identDict= {
			'primary',      () => {return new identData('primary','#16294C' , 'Primär','primary'},
			'secondary',    () => {return new identData('secondary','#259ee7', 'Sekundär','secondary'},
			'danger',       () => {return new identData('danger', '#db7712', 'Gefahr','danger'},
			'light',        () => {return new identData('light', '#d8d8d8', 'Leicht','light'},
			'white',        () => {return new identData('white', '#ffffff', 'Weiss','white'},
			'dark',         () => {return new identData('dark', '#545454', 'Dunkel','dark'},
			'kk',		() => {return new identData('kk', '#029DDD', 'Klappkisten','kk'},
			'misc',		() => {return new identData('misc', '#93a2ba', 'Misc','misc'},
			'slip',		() => {return new identData('slip', '#00067c', 'Slipsheet','slip'},
			'default',	() => {return new identData('default', '#ffffff', 'Default','default'},
			'we',		() => {return new identData('we','#c164c1', 'WE','we'},
			'wa',		() => {return new identData('wa','#ccbd7c', 'WA','wa'},
			'dps',		() => {return new identData('dps','#d17373', 'DPS','dps'},
			'cps',		() => {return new identData('cps','#9bbb59' 'CPS','cps'},
			'opm',		() => {return new identData('opm','#99b3dd' 'OPM','opm'},
			'inlay':	() => {return new identData('inlay','#99b3dd' 'Inlay','inlay'},
			'com':		() => {return new identData("com","#002f7c","COM Ko/h","comperf")},
			'dep':		() => {return new identData('dep' , '#00707c', 'DEP Ko/h', "depperf"},
			'comf':		() => {return new identData('comf', '#002f7c', 'COM Stoerungen 1000Ko/h', "com_errorcnt"},
			'depf':		() => {return new identData('depf', '#00707c', 'DEP Stoerungen 1000Ko/h', "dep_errorcnt"},
			'sale':		() => {return new identData('sale', '#00067c', 'Slipsheetverbrauch/Tag', "slipabv"},
			'stTry',	() => {return new identData('stTry', '#00067c', 'Slipsheet Bestand Try', "slipinvtry"},
			'rsTry',	() => {return new identData('rsTry', '#00067c', 'Slipsheet Bestand Try reserviert', "slipinvreserv"},
			'stHbw',	() => {return new identData('stHbw', '#00067c', 'Slipsheet Bestand Hbw', "slipinvhbw"},
			'dpick',	() => {return new identData('dpick','#7C0000', 'DPS Pick/h', "dpickuserperf"},
			'dpcnt',	() => {return new identData('dpcnt' ,'#7C0000','DPS Pick User',"dpickcnt"},
			'drpck',	() => {return new identData('drpck','#af3b3b', 'DPS Repack/h', "drpckuserperf"},
			'drcnt',	() => {return new identData('drcnt','#af3b3b','DPS Repack User',"drpckcnt"},
			'cpsa',		() => {return new identData('cpsa','#007c18', 'CPS Auto/h', "cpsautoperf"},
			'cpsacnt',	() => {return new identData('cpsacnt',	'#007c18', 'CPS Auto User',"cpsautocnt"},
			'cpsd',		() => {return new identData('cpsd',	'#467c00', 'CPS Display/h', "cdpsdspperf"},
			'cpsdcnt',	() => {return new identData('cpsdcnt',	'#467c00', 'CPS Display User',"cdpsdspcnt"},
			'wevarah',	() => {return new identData('wevarah',	'#c164c1', 'WE',"wevara_hour"},
			'wevarad',	() => {return new identData('wevarad',	'#c164c1', 'WE',"wevara_day"},
			'wepalh',	() => {return new identData('wepalh',	'#c164c1', 'WE',"wepal_hour"},
			'wepald',	() => {return new identData('wepald',	'#c164c1', 'WE',"wepal_day"},
			'ocbfill',	() => {return new identData('ocbfill',	'#ccbd7c', 'WA',"ocb_fillall"},
			'ocbfill91',	() => {return new identData('ocbfill91','#ccbd7c', 'WA',"ocb_fill91"},
			'ocbfill92',	() => {return new identData('ocbfill92','#ccbd7c', 'WA',"ocb_fill92"},
			'ocbopen',	() => {return new identData('ocbopen',	'#ccbd7c', 'WA',"ocb_openall"},
			'ocbopen91',	() => {return new identData('ocbopen91','#ccbd7c', 'WA',"ocb_open91"},
			'ocbopen92',	() => {return new identData('ocbopen92','#ccbd7c', 'WA',"ocb_open92"},
			'inlaysabv',	() => {return new identData('inlaysabv',"inlaysabv"},
			'kkdpsinv',	() => {return new identData('kkdpsinv',	"kkemptydpsinv"},
			'oopen',	() => {return new identData('oopen',	'#747474', 'Offene Auftragskolli heute'  ,"oopen"},
			'oopenn',	() => {return new identData('oopenn',	'#999999', 'Offene Auftragskolli morgen' ,"oopen2"},
			'dopen',	() => {return new identData('dopen',	'#747474', 'Offene Auftragskolli heute'  ,"dopen"},
			'copen',	() => {return new identData('copen',	'#747474', 'Offene Auftragskolli heute'  ,"copen"},
			'dopenn',	() => {return new identData('dopenn',	'#656565' , 'Offene Auftragskolli morgen',"dopen2"},
			'copenn',	() => {return new identData('copenn',	'#454545' , 'Offene Auftragskolli morgen',"copen2"},
			}; 
			


export const colorGet= (area: string,type: number) : string => {
			let data={
								'com':		() => {return type==1 ? '#002f7c': 'COM Ko/h'},
				'dep':		() => {return type==1 ? '#00707c': 'DEP Ko/h'},
				'comf':		() => {return type==1 ? '#002f7c': 'COM Stoerungen 1000Ko/h'},
				'depf':		() => {return type==1 ? '#00707c': 'DEP Stoerungen 1000Ko/h'},
				'sale':		() => {return type==1 ? '#00067c': 'Slipsheetverbrauch/Tag'},
				'stTry':	() => {return type==1 ? '#00067c': 'Slipsheet Bestand Try'},
				'rsTry':	() => {return type==1 ? '#00067c': 'Slipsheet Bestand Try reserviert'},
				'stHbw':	() => {return type==1 ? '#00067c': 'Slipsheet Bestand Hbw'},
				'dpick':	() => {return type==1 ? '#7C0000': 'DPS Pick/h'},
				'drpck':	() => {return type==1 ? '#af3b3b': 'DPS Repack/h'},
				'cpsa':		() => {return type==1 ? '#007c18': 'CPS Auto/h'},
				'cpsd':		() => {return type==1 ? '#467c00': 'CPS Display/h'},
				'oopen':	() => {return type==1 ? '#747474': 'Offene Auftragskolli heute'},
				'oopenn':	() => {return type==1 ? '#999999': 'Offene Auftragskolli morgen'},
				'dopen':	() => {return type==1 ? '#747474': 'Offene Auftragskolli heute'},
				'copen':	() => {return type==1 ? '#747474': 'Offene Auftragskolli heute'},
				'dopenn':	() => {return type==1 ? '#656565' : 'Offene Auftragskolli morgen'},
				'copenn':	() => {return type==1 ? '#454545' : 'Offene Auftragskolli morgen'},
				'wevarah':	() => {return type==1 ? '#c164c1' : 'Offene Auftragskolli morgen'},
				'wevarad':	() => {return type==1 ? '#c164c1' : 'Offene Auftragskolli morgen'},
				'wepalh':	() => {return type==1 ? '#c164c1' : 'Offene Auftragskolli morgen'},
				'wepald':	() => {return type==1 ? '#c164c1' : 'Offene Auftragskolli morgen'},
				'ocbfill':	() => {return type==1 ? '#ccbd7c' : 'Offene Auftragskolli morgen'},
				'ocbfill91':	() => {return type==1 ? '#ccbd7c' : 'Offene Auftragskolli morgen'},
				'ocbfill92':	() => {return type==1 ? '#ccbd7c' : 'Offene Auftragskolli morgen'},
				'ocbopen':	() => {return type==1 ? '#ccbd7c' : 'Offene Auftragskolli morgen'},
				'ocbopen91':	() => {return type==1 ? '#ccbd7c' : 'Offene Auftragskolli morgen'},
				'ocbopen92':	() => {return type==1 ? '#ccbd7c' : 'Offene Auftragskolli morgen'},

			};
			return (data[area]||data['default'])();
		}

export const graphOpt = (labeldata : any, perfdata : any, area : string, info : string, infosec : string )  : any =>
	{ return{
		type: 'line',
		    data: {
			labels: labeldata
				,
			datasets: [
			    {
				    label: colorGet(area,2)+" Avg: "+info+" Max: "+infosec,
				fill: false,
				lineTension: 0.1,
				backgroundColor: colorGet(area,1),
				borderColor: colorGet(area,1),
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: colorGet(area,1),
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: colorGet(area,1),
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
					fontColor: 'rgb(0, 0, 0)',
					    }
				}
                }
	}
}		;	


export const newCat = (cat: catData, catCol: catData[]): catData[] => {return new catData()};


export const graphBar = (labeldata : any, perfdata : any, area : string )  : any =>
	{ return{ 
		    type: 'horizontalBar',
		    data: {
			labels: labeldata,
			datasets: [
			    {
				label: area,
				data: perfData,
				backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
				    ],
				borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
				    ],
				    borderWidth: 1
			    }
			]
		    }
	 
		}

	};


export const perfDataListFunc= (area: string, EvsDat: any) : any => {
			
					
				const dataListFunc= (mdataval: any) : any =>{
				return EvsDat.getPerfListResult.map((data) : any =>
					{return {'date' : data.gendate,'val' : data[mdataval]}
					}) 
				};	
				return dataListFunc(identDict[area]().ext);

				
		};

export const perfDataEntFunc = (area: string, EvsDat: any) : any =>{
				const dataEntFunc=(mdataval: any) : any =>{
					return EvsDat.getPerfEntityResult[mdataval];
				};

				return dataEntFunc(identDict[area]().ext);
};
export const parseDateTime= (time: string) : any => { 
	
	
	//var etime=new evsTime();
	//Date(1516659302019+0100)/
	var ttime = new Date(parseInt(time.substring(6,19),10));
return	formatTime(ttime,"hour")+ ":" + formatTime(ttime,"min");	

//	etime.sec=etime.ms/1000;
//	etime.min=etime.sec/60;
//	etime.hours=etime.min/60;
//	etime.days=etime.hours/24;
//	etime.months=etime.days
}

const formatTime= (time : Date, gettype: string) : string => {
	
	let str = 
		{
			"hour" : ()=>{return time.getHours()<10 ? `0${time.getHours()}` : time.getHours()},
			"min" :  ()=>{return time.getMinutes()<10 ? `0${time.getMinutes()}` : time.getMinutes()}

	       		
		};


	return (str[gettype]||str[hour])();
} 
