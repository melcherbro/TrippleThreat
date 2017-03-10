import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {XboxPage} from '../xbox/xbox';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items: any[];

  constructor(public navCtrl: NavController) {
    this.items = [];

    this.items.push({
      text: 'John',
      id: '1111',
      notif: '2'
    });
    this.items.push({
      text: '2KillaGG',
      id: '420',
      notif: '0'
    });
    this.items.push({
      text: 'Melcher',
      id: '2222',
      notif: ''
    });
  }

  itemSelected(item){
    item.notif = '';
    this.navCtrl.push(XboxPage, {
      item: item
    });
  }

}
