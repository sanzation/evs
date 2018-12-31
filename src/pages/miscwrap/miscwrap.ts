import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MiscPage } from '../misc/misc';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { EventProvider } from '../../providers/eventprovider/eventprovider';
import { EvsBarfooterComponent } from '../../components/evs-barfooter/evs-barfooter';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-miscwrap',
  templateUrl: 'miscwrap.html',
})
export class MiscwrapPage extends MiscPage {

	@ViewChild(EvsBarfooterComponent) private footer: EvsBarfooterComponent;
	subscription : Subscription;

constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider, public Event : EventProvider) {
	super(navCtrl,navParams,EvsCall,Event);
	this.subscription = Event.footerShown$.subscribe(
				show =>{ 
					 this.showfooter();
				}
			);
	
  }
 hidefooter = () : void =>{
	this.footer.bshowit="off";
	this.showicon="symboloff";
}
showfooter = () : void =>{
	this.footer.bshowit="on";
	this.showicon="symbolon";
	this.footer.actGraph(this.hbwCat, this.tryCat, this.excCat, this.sebCat, this.dpsCat);
}
switchfooter = () : void =>{
if(this.footer.bshowit==="on")
	{
		this.hidefooter();
	}
	else
	{
		this.showfooter();	
	}
}

}
