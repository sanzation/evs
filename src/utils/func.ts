import { catData, identData } from '../utils/types';

const identDict= {
			'primary':      () => {return new identData('primary','#16294C' , "Primaer",'primary')},
			'secondary':    () => {return new identData('secondary','#259ee7', "Sekundaer",'secondary')},
			'danger':       () => {return new identData('danger', '#db7712', 'Gefahr','danger')},
			'light':        () => {return new identData('light', '#d8d8d8', 'Leicht','light')},
			'white':        () => {return new identData('white', '#ffffff', 'Weiss','white')},
			'dark':         () => {return new identData('dark', '#545454', 'Dunkel','dark')},
			'kk':		() => {return new identData('kk', '#029DDD', 'Klappkisten','kk')},
			'misc':		() => {return new identData('misc', '#93a2ba', 'Misc','misc')},
			'slip':		() => {return new identData('slip', '#00067c', 'Slipsheet','slip')},
			'default':	() => {return new identData('default', '#ffffff', 'Default','default')},
			'we':		() => {return new identData('we','#c164c1', 'WE','we')},
			'wa':		() => {return new identData('wa','#ccbd7c', 'WA','wa')},
			'dps':		() => {return new identData('dps','#d17373', 'DPS','dps')},
			'cps':		() => {return new identData('cps','#9bbb59','CPS','cps')},
			'opm':		() => {return new identData('opm','#99b3dd','OPM','opm')},
			'inlay':	() => {return new identData('inlay','#99b3dd','Inlay','inlay')},
			'com':		() => {return new identData("com","#002f7c","COM Ko/h","comperf")},
			'dep':		() => {return new identData('dep' , '#00707c', 'DEP Ko/h', "depperf")},
			'comf':		() => {return new identData('comf', '#002f7c', 'COM Stoerungen 1000Ko/h', "com_errorcnt")},
			'depf':		() => {return new identData('depf', '#00707c', 'DEP Stoerungen 1000Ko/h', "dep_errorcnt")},
			'sale':		() => {return new identData('sale', '#00067c', 'Slipsheetverbrauch/Tag', "slipabv")},
			'stTry':	() => {return new identData('stTry', '#00067c', 'Slipsheet Bestand Try', "slipinvtry")},
			'rsTry':	() => {return new identData('rsTry', '#00067c', 'Slipsheet Bestand Try reserviert', "slipinvreserv")},
			'stHbw':	() => {return new identData('stHbw', '#00067c', 'Slipsheet Bestand Hbw', "slipinvhbw")},
			'dpick':	() => {return new identData('dpick','#7C0000', 'DPS Pick/h', "dpickuserperf")},
			'dpcnt':	() => {return new identData('dpcnt' ,'#7C0000','DPS Pick User',"dpickcnt")},
			'drpck':	() => {return new identData('drpck','#af3b3b', 'DPS Repack/h', "drpckuserperf")},
			'drcnt':	() => {return new identData('drcnt','#af3b3b','DPS Repack User',"drpckcnt")},
			'cpsa':		() => {return new identData('cpsa','#007c18', 'CPS Auto/h', "cpsautoperf")},
			'cpsacnt':	() => {return new identData('cpsacnt',	'#007c18', 'CPS Auto User',"cpsautocnt")},
			'cpsd':		() => {return new identData('cpsd',	'#467c00', 'CPS Display/h', "cpsdspperf")},
			'cpsdcnt':	() => {return new identData('cpsdcnt',	'#467c00', 'CPS Display User',"cpsdspcnt")},
			'wevarh':	() => {return new identData('wevarh',	'#c164c1', 'WE Automatikquote%/h',"wevara_hour")},
			'wevard':	() => {return new identData('wevard',	'#c164c1', 'WE Automatikquote%/Tag',"wevara_day")},
			'wepalh':	() => {return new identData('wepalh',	'#c164c1', 'WE Paletten/h',"wepal_hour")},
			'wepald':	() => {return new identData('wepald',	'#c164c1', 'WE Paketten/Tag',"wepal_day")},
			'ocbfill':	() => {return new identData('ocbfill',	'#ccbd7c', 'WA Füllgrad%',"ocb_fillall")},
			'ocbfill91':	() => {return new identData('ocbfill91','#ccbd7c', 'WA Füllgrad% 91',"ocb_fill91")},
			'ocbfill92':	() => {return new identData('ocbfill92','#ccbd7c', 'WA Füllgrad% 92',"ocb_fill92")},
			'ocbopen':	() => {return new identData('ocbopen',	'#ccbd7c', 'WA Offene Tu',"ocb_openall")},
			'ocbopen91':	() => {return new identData('ocbopen91','#ccbd7c', 'WA Offene Tu 91',"ocb_open91")},
			'ocbopen92':	() => {return new identData('ocbopen92','#ccbd7c', 'WA Offene Tu 92',"ocb_open92")},
			'saInl':	() => {return new identData('saInl','#99b3dd', 'Inlay Abverkauf/Tag',"inlaysabv")},
			'stInl':	() => {return new identData('stInl',	'#99b3dd', 'Inlay Bestand',"inlaysinv")},
			'kkDps':	() => {return new identData('kkDps',	'#99b3dd', 'Leer-Klappkisten DPS',"kkemptydpsinv")},
			'kkHbw':	() => {return new identData('kkHbw',	'#99b3dd', 'Leer-Klappkistenpaletten HBW',"kkstackhbwinv")},
			'oopen':	() => {return new identData('oopen',	'#747474', 'Offene Auftragskolli heute'  ,"oopen")},
			'oopenn':	() => {return new identData('oopenn',	'#999999', 'Offene Auftragskolli morgen' ,"oopen2")},
			'dopen':	() => {return new identData('dopen',	'#747474', 'Offene Auftragskolli heute'  ,"dopen")},
			'copen':	() => {return new identData('copen',	'#747474', 'Offene Auftragskolli heute'  ,"copen")},
			'dopenn':	() => {return new identData('dopenn',	'#656565' , 'Offene Auftragskolli morgen',"dopen2")},
			'copenn':	() => {return new identData('copenn',	'#454545' , 'Offene Auftragskolli morgen',"copen2")},
			'hbw':		() => {return new identData('hbw',	'#cc33ff' , 'Hochregal Fuellgrad',"#ac00e6")},
			'try':		() => {return new identData('try',	'#ffcc99' , 'Traylager Fuellgrad',"#ffa64d")},
			'exc':		() => {return new identData('exc',	'#ff6600' , 'Exchanger Fuellgrad',"#b34700")},
			'seb':		() => {return new identData('seb',	'#33cccc' , 'Sequencer Fuellgrad',"#248f8f")},
			}; 
			


export const getColor= (area: string) : string => {
					return (identDict[area]().color);
		}

export const getExt= (area: string) : string => {
					return (identDict[area]().ext);
		}

export const getInfo= (area: string) : string => {
					return (identDict[area]().info);
		}
				
export const graphOpt = (labeldata : any, perfdata : any, area : string, info : string, infosec : string )  : any =>
	{ return{
		type: 'line',
		    data: {
			labels: labeldata
				,
			datasets: [
			    {
				    label: getInfo(area)+" Avg: "+info+" Max: "+infosec,
				fill: false,
				lineTension: 0.1,
				backgroundColor: getColor(area),
				borderColor: getColor(area),
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: getColor(area),
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: getColor(area),
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


export const newCat = (cat: catData, catCol: catData[]): catData[] => {catCol.push(cat);
									return catCol;};


export const graphBar = (data : any, area : string )  : any =>
	{ return{ 
		    type: 'bar',
		    data: data, 
		options: {
			plugins: {
					datalabels: {
						display: true,
					        anchor: 'end',	
						align: 'top',
						font: {
							size: 11,
							weight: 600 
						},
						backgroundColor: "gray",
						color: "white",
						borderRadius: 4,
						offset: -3,
						borderWidth: 1,
						borderColor: "black",
						formatter: function(value) {
						    return Math.round(value) + '%';
}
					}
				},
			maintainAspectRatio: false,
			responsive: true,
			legend: false,
			scales:{
				xAxes: 
				[
				 {
					  id:'xAxis1',
					  type:"category",
					  ticks:{
					    callback:function(label){
					      var cat = label.split(";")[0];
					      var typeo = label.split(";")[1];
					      var typet = label.split(";")[2];
					        return [typeo+' | '+typet,cat];
					    }
					  }					},
				/*	{
					  id:'xAxis2',
					  type:"category",
					  gridLines: {
					    drawOnChartArea: false, // only want the grid lines for one axis to show up
					  },
					  ticks:{
					    callback:function(label){
					      var month = label.split(";")[0];
					      return month; 
					    }
					  }

					}*/
				],
				yAxes: [{
				id:'yAxis1',
				stacked: false
				}]
			    }
                }

	 
		}

	};


export const perfDataListFunc= (area: string, EvsDat: any) : any => {
			
					
				const dataListFunc= (mdataval: any) : any =>{
				return EvsDat.getPerfListResult.map((data) : any =>
					{return {'date' : data.gendate,'val' : data[mdataval]}
					}) 
				};	
				return dataListFunc(getExt(area));

				
		};

export const perfDataEntFunc = (area: string, EvsDat: any) : any =>{
				const dataEntFunc=(mdataval: any) : any =>{
					return EvsDat.getPerfEntityResult[mdataval];
				};
				return dataEntFunc(getExt(area));
};

export const perfDataLastFunc = (area: string, EvsDat: any) : any =>{
				const dataListFunc= (mdataval: any) : any =>{
					return EvsDat.getPerfListResult[EvsDat.getPerfListResult.length-1][mdataval];
				};
				return dataListFunc(getExt(area));
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


	return (str[gettype]||str["hour"])();
} 
export const calcTimeleft= (perf: number, open:number) : string =>{
	var retstring : number;
	if(perf==0){
		retstring=0;
	}else{
		retstring=open/perf;	
	}

return decToStr(retstring); 

} 	
const decToStr= (n : number) : string =>{
	let min : number;
	let hour : number;
	let sec : number;
	let deca : number;
	let decb : number;
	hour=Math.floor(n);
	deca=(n-hour)*0.6*100;
	min=Math.floor(deca);
	decb=(deca-min)*0.6*100;
	sec=Math.floor(decb);


		return `${formatDec(hour)}:${formatDec(min)}:${formatDec(sec)}`;	
}

const formatDec = (num : number) : string =>{
	return num<10
       	?
	`0${num}`
	:
       	`${num}`;

}
