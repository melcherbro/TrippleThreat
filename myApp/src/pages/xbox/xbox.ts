import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../home/home';

/*
  Generated class for the Xbox page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-xbox',
  templateUrl: 'xbox.html'
})
export class XboxPage extends HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
       super(navCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XboxPage');
  }

}
