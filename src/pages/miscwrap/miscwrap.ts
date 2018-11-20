import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MiscPage } from '../misc/misc';
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
  selector: 'page-miscwrap',
  templateUrl: 'miscwrap.html',
})
export class MiscwrapPage extends ParentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public EvsCall : EvscallProvider) {
	super(navCtrl,navParams,EvsCall);
  }


}
