import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BlePage } from "../connect/bluetooth";

@Component({
  selector: 'page-chip-on',
  templateUrl: 'chip-on.html'
})
export class ChipOnPage {

  constructor(public navCtrl: NavController) {

  }

  nextPage() {
    this.navCtrl.push( BlePage )
  }
}
