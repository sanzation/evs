
export class catData{
	perfDiff: any;
	perfDiffCol: string;
	name: string;;
	select: string;
	data: any;
	datasec: any;


	constructor(public iname: string)
	{
	this.perfDiff=0;
	this.perfDiffCol='primary';
	this.select=' ';
	this.name=iname;	
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
export class opCntData{
	area: string;
	cnt: number;

	constructor(area: string, cnt: number){
	this.area=area;
	this.cnt=cnt;	
	}

}
export class opData{

	ident: string; //Like-Item Gruppenfehler
	type: string;  //error
	source: string; // ZMA1050
	comment: string; // Like-Item Gruppenfehler Strategie OPM auf Lagerbestand
	opcnt: number; // 633
	gendate: string; //sysdate
	index: number;
	data: string;
	info: string;
	
	constructor(ident: string,type : string, source : string,
	comment : string, opcnt : number, gendate : string, index : number, data : string, info : string
	){
		this.ident=ident; 
		this.type=type; 
		this.source=source; 
		this.comment=comment; 
		this.opcnt=opcnt; 
		this.gendate=gendate; 
		this.index=index;
		this.data=data;
		this.info=info;
	
	}

}
