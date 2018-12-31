import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { EventProvider } from '../../providers/eventprovider/eventprovider';
import { perfDataEntFunc,formatTime,perfDataLastFunc } from '../../utils/func';
import { catData } from '../../utils/types';


@IonicPage()
@Component({
  selector: 'page-parent',
  templateUrl: 'parent.html'
})
export class ParentPage {
	EvsData:any;
	ErrorData: any;
	CatCol: Array<catData>;
	timeleft: string;	
	stateInfo: string;
	state: string;
	subscription: Subscription;
	subIcon: Subscription;
	showicon: string;
	actArea: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public EvsCall : EvscallProvider, public Event : EventProvider) {
	this.CatCol=new Array<catData>();  
	 setInterval(()=>{this.load();},60000);

  }

 ionViewWillEnter() {
	 this.load();
     }
load= () : void =>{
this.EvsCall.getData().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	this.CatCol.map((cat)=>{ cat.data=perfDataEntFunc(cat.name,EvsData) });
	var ttime = new Date();
	this.stateInfo=`Aktualisiert: ${formatTime(ttime,"hour")+":"+formatTime(ttime,"min")}`;
	this.state="stateok";

     },
	error => {this.stateInfo=`Error: ${error.status} Info: ${error.statusText}`;
		  this.state="stateerr";
		 }
	);

   this.EvsCall.getList().subscribe(EvsData=>{
	this.EvsData= EvsData.current_observation;
	this.CatCol.map((cat)=>{cat.perfDiff=Math.round(cat.data-perfDataLastFunc(cat.name,EvsData));
				cat.perfDiffCol= cat.perfDiff>0 ? 'secondary' : 'danger'  ;
	});
     });


}	

public actSelect(area : string)
	{
	
	this.Event.showFooter(area);	

	this.CatCol.forEach( (cat) => {		
	cat.select = area ==cat.name ? '#f0f0f0' : '#ffffff';
	});
	
	}	


}
