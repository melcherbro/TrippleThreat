import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {XboxPage} from '../xbox/xbox';
import {MessagesPage} from '../messages/messages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[][];
  names: any[];
  psnames: any[];
  steamnames: any[];
  searchQuery: string = '';
  johnNotif: number = 0;
  killaGGNotif: number = 0;


  constructor(public navCtrl: NavController) {
    this.items = [];
    this.names = [];
    this.psnames = [];
    this.steamnames = [];
    this.johnNotif;
    this.killaGGNotif;

    this.initializeItems();
  }

  searchGamerTags(ev: any){
       this.clearText();

       let val = ev.target.value;

       if (val && val.trim() != ''){
            this.items = this.items.filter((item) => {
                 return (item[0].text.toLowerCase().indexOf(val.toLowerCase()) > - 1);
            });
       } else if (val == ''){
          this.clearText();
     } else if(val.trim() != ''){
          this.items = this.items.filter((item) => {
               return (item[0].text.toLowerCase().indexOf(val.toLowerCase()) > - 1);
          });
     }
 }

     clearText(){
          this.items = [];
          this.names = [];
          this.psnames = [];
          this.steamnames = [];

          this.initializeItems();
     }

 initializeItems(){

      if (this.johnNotif == 0){
           this.names.push({
            text: 'John',
            id: '1111',
            notif: '2'
           });
      } else {
           this.names.push({
            text: 'John',
            id: '1111',
            notif: ''
           });
      }

      if(this.killaGGNotif == 0){
           this.names.push({
           text: '2KillaGG',
           id: '420',
           notif: '1'
           });
      } else {
           this.names.push({
            text: '2KillaGG',
            id: '420',
            notif: ''
           });
      }


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

      this.items.push(this.names,this.psnames,this.steamnames);

      /**
      for(let i = 0; i < 10; i++)
      {
       this.items.push({
          text: 'Item ' + i,
          id: i
       });
      }
      */

     //  for( let i = 0; i < 3; i++)
     //  {
     //   this.items.push({
     //      text: this.names[i].text,
     //      id: this.names[i].id,
     //      notif: this.names[i].notif
     //   });
     //  }
}

  itemSelected(item){
    item.notif = '';
    this.navCtrl.push(MessagesPage, {
      item: item
    });
  }
}
