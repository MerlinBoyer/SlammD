import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../../home/home";

@Component({
  selector: 'page-ready',
  templateUrl: 'ready.html'
})
export class ReadyPage {

  constructor(public navCtrl: NavController) {

  }

  nextPage() {
    this.navCtrl.push( HomePage )
  }
}
