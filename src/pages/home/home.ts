import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BlePage } from '../bluetooth/bluetooth'
import { ContactPage } from '../contact/contact'
import {AlertsPage} from "../alerts/alerts";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public displayError: any;

  constructor(public navCtrl: NavController){
  }

  onClickSettings(){
    
  }

  onClickButtonBLE(){
    this.navCtrl.push( BlePage, {} );
  }

  onClickButtonContacts(){
    this.navCtrl.push( ContactPage, {} );
  }

  onClickButtonAlerts(){
    this.navCtrl.push( AlertsPage, {} );
  }


}
