import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActivatePage} from "../bluetooth/activate/activate";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public displayError: any;

  constructor(public navCtrl: NavController){

  }

  onClickButtonBLE(){
    this.navCtrl.push( ActivatePage, {} );
  }

  onClickButtonContacts(){
    console.log('contacts')
  }

  onClickButtonAlerts(){
    console.log('Alerts')
  }


}
