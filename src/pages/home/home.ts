import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact'
import {AlertsPage} from "../alerts/alerts";
import { ActivatePage} from "../bluetooth/activate/activate";

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
    this.navCtrl.push( ActivatePage, {} );
  }

  onClickButtonContacts(){
    this.navCtrl.push( ContactPage, {} );
  }

  onClickButtonAlerts(){
    this.navCtrl.push( AlertsPage, {} );
  }


}
