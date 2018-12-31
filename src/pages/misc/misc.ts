import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { parseDateTime, perfDataEntFunc} from '../../utils/func';
import { catData } from '../../utils/types';
import { EventProvider } from '../../providers/eventprovider/eventprovider';

@Component({
  selector: 'page-misc',
  templateUrl: 'misc.html',
})
export class MiscPage{
	EvsData:any;
	CatCol: Array<catData>;

	dpsCat: catData;
	hbwCat: catData;
	tryCat: catData;
	excCat: catData;
	sebCat: catData;

	spacer: string;
	//showheight: string;
	stateInfo: string;
	state: string;
	showicon: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider, public Event : EventProvider) {

	this.CatCol=new Array<catData>();  
	 setInterval(()=>{this.load();},60000);
	this.dpsCat=new catData('dps');
	this.hbwCat=new catData('hbw');
	this.tryCat=new catData('opm');  
	this.excCat=new catData('exc');
	this.sebCat=new catData('seb');

	this.CatCol.push(this.dpsCat);
	this.CatCol.push(this.hbwCat);
	this.CatCol.push(this.tryCat);
	this.CatCol.push(this.excCat);
	this.CatCol.push(this.sebCat);
	this.spacer="  -  ";

  }
ionViewWillEnter(){

	this.load();
}	
load= () : void =>{
	this.EvsCall.getData().subscribe(EvsData=>{
			this.EvsData= EvsData.current_observation;
			this.dpsCat.data=Math.round(EvsData.getPerfEntityResult.kkinvdpsinv/560);
			this.dpsCat.datasec=this.dpsCat.data;  
			this.stateInfo=`Aktualisiert: ${parseDateTime(perfDataEntFunc('gen',EvsData))}`;
			this.state="stateok";
		     },
	error => {this.stateInfo=`Error: ${error.status} Info: ${error.statusText}`;
		  this.state="stateerr";
		 }
	);

	this.EvsCall.getFill().subscribe(EvsData=>{
		this.EvsData= EvsData.current_observation;

		this.CatCol= this.CatCol.map( (cat) : catData => {
			if(cat.name==='dps'){
				return cat;
			}
			else
			{
			var obj = EvsData.getFillListResult.find( (data) => {return data.area.toLowerCase()===cat.name});
			cat.data=obj.locfill;
			cat.datasec=obj.chanfill;
			return cat;	
			}
		
		});
	   });	
}
actSelect=(area : string): void =>
	{
	//this.showheight='30%';
	this.Event.showFooter(area);
	this.CatCol.forEach( (cat) => {

	cat.select = area ==cat.name ? '#f0f0f0' : '#ffffff';
	});
		
}	


}
