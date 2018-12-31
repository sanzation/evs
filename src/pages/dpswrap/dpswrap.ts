import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { EventProvider } from '../../providers/eventprovider/eventprovider';
import { EvsFooterComponent } from '../../components/evs-footer/evs-footer';
import { ParentPage } from '../parent/parent';

@IonicPage()
@Component({
  selector: 'page-dpswrap',
  templateUrl: 'dpswrap.html',
})
export class DpswrapPage extends ParentPage {
		
	@ViewChild(EvsFooterComponent)
	private footer: EvsFooterComponent;

constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider, public Event : EventProvider) {
	super(navCtrl,navParams,EvsCall,Event);

		this.subscription = Event.footerShown$.subscribe(
				show =>{ this.actArea=show;
					 this.showfooter(show);
				}
			);
	}

hidefooter = () : void =>{
	this.footer.showit="off";
	this.showicon="symboloff";
}
showfooter = (area : string) : void =>{
	this.footer.showit="on";
	this.showicon="symbolon";
	this.footer.graphForSelect(area);
}
switchfooter = (area = "dpick") : void =>{
	if(this.footer.showit==="on")
	{
		this.hidefooter();
	}
	else
	{
		this.showfooter(area);	
	}
}


}
