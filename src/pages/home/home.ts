import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BlePage } from '../bluetooth/bluetooth'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public displayError: any;

  constructor(public navCtrl: NavController){

  }

  onClickButtonBLE(){
    this.navCtrl.push( BlePage, {} );
  }

  onClickButtonContacts(){
    console.log('contacts')
  }

  onClickButtonAlerts(){
    console.log('Alerts')
  }


}
