import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { ParentPage } from '../parent/parent';
import { MiscPage } from '../misc/misc';
import { EventProvider } from '../../providers/eventprovider/eventprovider';
import { EvsFooterComponent } from '../../components/evs-footer/evs-footer';
import { EvsBarfooterComponent } from '../../components/evs-barfooter/evs-barfooter';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
  //directives: [OpmPage, DpsPage] 
})
export class DashboardPage extends ParentPage {

	@ViewChild(EvsFooterComponent) private footer: EvsFooterComponent;
	@ViewChild(EvsBarfooterComponent) private bfooter: EvsBarfooterComponent;
	@ViewChild(MiscPage) private misc: MiscPage;
	childclass: string;
	coliconclass: string;
	rowiconclass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider, public Event : EventProvider ) {
	super(navCtrl,navParams,EvsCall,Event);
	this.childclass="flexchildcol";
	 this.coliconclass="symbolon";
	 this.rowiconclass="symboloff";
	this.subscription = Event.footerShown$.subscribe(
				show =>{ 
					 this.showfooter(show);
				}
			);

  }
doColSort(){
	 this.childclass="flexchildcol";
	 this.coliconclass="symbolon";
	 this.rowiconclass="symboloff";
}
doRowSort(){
	 this.childclass="flexchild";
	 this.coliconclass="symboloff";
	 this.rowiconclass="symbolon";
}
hidefooter = () : void =>{
	this.footer.showit="off";
	this.bfooter.bshowit="off";
	this.showicon="symboloff";
}
showfooter = (area : string) : void =>{

	this.showicon="symbolon";

	
	if (['hbw','opm','exc','seb','dps'].indexOf(area)>=0)
	{
	this.footer.destroyChart();
	this.bfooter.bshowit="on";
	this.bfooter.actGraph(this.misc.hbwCat, this.misc.tryCat, this.misc.excCat, this.misc.sebCat, this.misc.dpsCat);
	}
	else
	{
	this.bfooter.destroyChart();
	this.footer.showit="on";
	this.footer.graphForSelect(area);
	}
}
switchfooter = (area = "com") : void =>{
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
