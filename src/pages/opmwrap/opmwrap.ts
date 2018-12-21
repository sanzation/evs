import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpmPage } from '../opm/opm';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { catData } from '../../utils/types';
import { ParentPage } from '../parent/parent';
import { EvsFooterComponent } from '../../components/evs-footer/evs-footer';
/**
 * Generated class for the OpmwrapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opmwrap',
  templateUrl: 'opmwrap.html',
})
export class OpmwrapPage extends OpmPage {
		@ViewChild(EvsFooterComponent)
		private footer: EvsFooterComponent;
		showicon: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
			super(navCtrl,navParams,EvsCall);
			setInterval(()=>{
			this.footer.showit=(<any>window).showit;
			this.showicon=(<any>window).showicon;
			},5000);
	}
showit() {return " ";}

ionViewWillEnter(){
 setTimeout(() => this.showit = () => this.footer.showit, 0);
}


hidefooter = () : void =>{
	this.footer.showit="off";
	(<any>window).showit="off";
	this.showicon="symboloff";
	(<any>window).showicon="symboloff";
}
showfooter = () : void =>{
	this.footer.showit="on";
	(<any>window).showit="on";
	this.showicon="symbolon";
	(<any>window).showicon="symboloff";
}
switchfooter = () : void =>{
if((<any>window).showit==="on")
	{
			this.hidefooter();
	}
	else
	{
		this.showfooter();	
	}
}

}
