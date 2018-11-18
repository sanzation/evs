import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpmPage } from '../opm/opm';
import { EvscallProvider } from '../../providers/evscall/evscall';
import { catData } from '../../utils/types';
import { ParentPage } from '../parent/parent';

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
export class OpmwrapPage extends ParentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
	super(navCtrl,navParams,EvsCall);
  }


}
