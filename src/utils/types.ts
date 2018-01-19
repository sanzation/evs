export interface IcatData{
		perfDiff: any;
		perfDiffCol: string;
		name: string;
		select: string;
		data: any;
		datasec: any;

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
