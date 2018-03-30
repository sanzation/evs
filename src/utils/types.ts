
export class catData{
	perfDiff: any;
	perfDiffCol: string;
	name: string;;
	select: string;
	data: any;
	datasec: any;


	constructor(name: string)
	{
	this.perfDiff=0;
	this.perfDiffCol='primary';
	this.select=' ';
	this.name=name;	
	this.data=0;	
	this.datasec=0;	
	}
}
export class evsTime{
	date: number;
	hours: number;
	min: number;
	sec: number;
	ms: number;

constructor()
	{
	this.date=0;
	this.hours=0;
	this.min=0;
	this.sec=0;
	this.ms=0;	
	}

}

export class identData{


	name: string;
	color: string;
	info: string;	
	ext: string;

	constructor(name: string, color: string, info : string, servicename : string)
	{
	this.name=name;
	this.color=color;
	this.info=info;
	this.ext=servicename;	
	
	}

}

export class camData{
	name: string;
	url: string;

	constructor(name: string, url: string){
	this.name=name;
	this.url=url;	
	}

}
export class opData{

	ident: string; //Like-Item Gruppenfehler
	type: string;  //error
	source: string; // ZMA1050
	comment: string; // Like-Item Gruppenfehler Strategie OPM auf Lagerbestand
	opcnt: number; // 633
	gendate: string; //sysdate
	icon: string; // ios-alert
	iconcol: string;
	
	constructor(ident: string,type : string, source : string,
	comment : string, opcnt : number, gendate : string
	){
		this.ident=ident; 
		this.type=type; 
		this.source=source; 
		this.comment=comment; 
		this.opcnt=opcnt; 
		this.gendate=gendate; 
		
		switch(type){
			case 'error':	
			this.icon='ion-alert';
			this.iconcol='#af1f0c';       	
			break;			
			case 'info':	
			this.icon='ion-information'; 
			this.iconcol='#4286f4';       	
			break;			
			case 'stats':	
			this.icon='ion-stats-bars'; 
			this.iconcol='1e1e1e';       	
			break;
			default:
			this.icon='ion-more';			
			this.iconcol='#515050';       	
		}
		
	}

}
