
export class catData{
	perfDiff: any;
	perfDiffCol: string;
	name: string;
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
