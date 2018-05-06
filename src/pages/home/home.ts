import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpmPage } from '../opm/opm';
import { DpsPage } from '../dps/dps';
import { CpsPage } from '../cps/cps';
import { WaPage } from '../wa/wa';
import { WePage } from '../we/we';
import { MiscPage } from '../misc/misc';
import { CamsPage } from '../cams/cams';
import { MasterdataPage } from '../masterdata/masterdata';
import { StockPage } from '../stock/stock';
import { ExpendablePage } from '../expendable/expendable';
import { MaterialflowPage } from '../materialflow/materialflow';
import { opCntData } from '../../utils/types';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { formatTime, dataEntFunc } from '../../utils/func';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	mdCnt : number;
	stCnt : number;
	exCnt : number;
	mfCnt: number;

	stateInfo: string;
	EvsData: any;
	state: string;

  constructor(public navCtrl: NavController, public EvsCall : EvscallProvider  ) {
	  setInterval(()=>{this.load();},60000);
	this.mdCnt=0;
	this.stCnt=0;
	this.exCnt=0;
	this.mfCnt=0;
  }

ionViewDidEnter(){
	   this.load();


}
	
load= () : void =>{
	this.EvsCall.getOpCnt().subscribe(EvsData=>{
			this.EvsData= EvsData.current_observation;
			EvsData.getOpCntResult.forEach((data)=>{
				if (data.area==='masterdata'){
					this.mdCnt=data.cnt;
				};
				if (data.area==='stock')
				{
					this.stCnt=data.cnt;
				};
				if (data.area==='expendable')
				{
					this.exCnt=data.cnt;
				};
				if (data.area==='materialflow')
				{
					this.mfCnt=data.cnt;
				}

			});// return new opCntData(data.area,data.cnt)});
			var ttime = new Date();
			this.stateInfo=`Aktualisiert: ${formatTime(ttime,"hour")+":"+formatTime(ttime,"min")}`;
			this.state="stateok";
		     },
	error => {this.stateInfo=`Error: ${error.status} Info: ${error.statusText}`;
		  this.state="stateerr";
		 }
	);
}
  pushOpm(){
   this.navCtrl.push(OpmPage);
  }
  pushDps(){
   this.navCtrl.push(DpsPage);
   }
   pushCps(){
   this.navCtrl.push(CpsPage);
   }
   pushWe(){
   this.navCtrl.push(WePage);
   }
   pushWa(){
   this.navCtrl.push(WaPage);
   }
   pushMisc(){
   this.navCtrl.push(MiscPage);
   }
   pushCams(){
   this.navCtrl.push(CamsPage);
   }

   pushMasterdata(){
   this.navCtrl.push(MasterdataPage);
   }

   pushStock(){
   this.navCtrl.push(StockPage);
   }

   pushExpendable(){
   this.navCtrl.push(ExpendablePage);
   }

   pushMaterialflow(){
   this.navCtrl.push(MaterialflowPage);
   }
}

