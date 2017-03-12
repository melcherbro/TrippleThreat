import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {XboxPage} from '../xbox/xbox';
import {MessagePage} from '../message/message';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage extends HomePage{
  steamItems: any[];

  constructor(public navCtrl: NavController) {
       super(navCtrl);

       //lol at this hackish ways
       this.steamItems = this.items;
       if(this.items[0][0].text === 'John'){
            this.items[0][0].notif = '';
            this.johnNotif++;
       }

       if(this.items[0][0].text === '2KillaGG'){
            this.items[0][0].notif = '';
            this.killaGGNotif++;
       }


    // this.items = [];
    //
    // this.items.push({
    //   text: 'John',
    //   id: '1111',
    //   notif: '2'
    // });
    // this.items.push({
    //   text: '2KillaGG',
    //   id: '420',
    //   notif: '0'
    // });
    // this.items.push({
    //   text: 'Melcher',
    //   id: '2222',
    //   notif: ''
    // });
  }

  itemSelected(item){
    item.notif = '';
    this.navCtrl.push(XboxPage, {
      item: item
    });
  }

}
