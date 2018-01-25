interface IcatData{
		perfDiff: any;
		perfDiffCol: string;
		name: string;
		select: string;
		data: any;
		datasec: any;

	};
interface Itime {
	date: number;
	hours: number;
	min: number;
	sec: number;
	ms: number;

}
interface IidentData{
	servicename: string;
	name: string;
	color: string;
	info: string;	

};

export class catData implements IcatData{
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
export class evsTime implements Itime{
constructor()
	{
	this.date=0;
	this.hours=0;
	this.min=0;
	this.sec=0;
	this.ms=0;	
	}

}
