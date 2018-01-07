import { catData } from '../utils/types';


export const colorGet= (area: string,type: number) : string => {
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
				'oopen':	() => {return type==1 ? '#f4f4f4': 'Offene Auftragskolli heute'},
				'oopenn':	() => {return type==1 ? '#f9f9f9': 'Offene Auftragskolli morgen'},
				'dopen':	() => {return type==1 ? '#f4f4f4': 'Offene Auftragskolli heute'},
				'copen':	() => {return type==1 ? '#f4f4f4': 'Offene Auftragskolli heute'},
				'dopenn':	() => {return type==1 ? '#f9f9f9' : 'Offene Auftragskolli morgen'},
				'copenn':	() => {return type==1 ? '#f9f9f9' : 'Offene Auftragskolli morgen'},
			};
			return (data[area]||data['default'])();
		}

export const graphOpt = (labeldata : any, perfdata : any, area : string )  : any =>
	{ return{
		type: 'line',
		    data: {
			labels: labeldata
				,
			datasets: [
			    {
				label: colorGet(area,2),
				fill: false,
				lineTension: 0.1,
				backgroundColor: colorGet(area,1),
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
					fontColor: 'rgb(0, 0, 0)',
					    }
				}
                }
	}
}		;	


export const newCat = (cat: catData, catCol: catData[]): catData[] => {return new catData()};
