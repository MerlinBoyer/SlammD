import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public inputValue;

  constructor(public navCtrl: NavController, public storage: Storage) {
  }

  saveNumber() {
    console.log('save: '+ this.inputValue)
    this.storage.set('phoneNumber',this.inputValue);
  }

  onInput(ev) {
    this.inputValue = ev;
  }
}
