import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {XboxPage} from '../xbox/xbox';
import {MessagesPage} from '../messages/messages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];
  names: any[];
  psnames: any[];
  steamnames: any[];


  constructor(public navCtrl: NavController) {
    this.items = [];
    this.names = [];
    this.psnames = [];
    this.steamnames = [];

    this.names.push({
      text: 'John',
      id: '1111',
      notif: '2'
    });
    this.names.push({
      text: '2KillaGG',
      id: '420',
      notif: '0'
    });
    this.names.push({
      text: 'Melcher',
      id: '2222',
      notif: ''
    });


    this.psnames.push({
     text: 'PSMan',
     id: '3333'
    });

    this.psnames.push({
      text: 'CoolKatz',
      id: '4444'
    });

    this.psnames.push({
      text: 'GirlGamer69',
      id: '6969'
    });


    this.steamnames.push({
      text: 'SteamedLoL',
      id: '5555'
    });

    this.steamnames.push({
      text: 'RunningOutofNames',
      id: '6666'
    });

    this.steamnames.push({
      text: 'China#1',
      id: '7777'
    });

    /**
    for(let i = 0; i < 10; i++)
    {
      this.items.push({
        text: 'Item ' + i,
        id: i
      });
    }
    */

    for( let i = 0; i < 3; i++)
    {
      this.items.push({
        text: this.names[i].text,
        id: this.names[i].id,
        notif: this.names[i].notif
      });
    }
  }

  itemSelected(item){
    item.notif = '';
    this.navCtrl.push(MessagesPage, {
      item: item
    });
  }
}
