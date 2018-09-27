import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChipOnPage} from "../chip-on/chip-on";

@Component({
  selector: 'page-activate',
  templateUrl: 'activate.html'
})
export class ActivatePage {

  constructor(public navCtrl: NavController) {

  }

  nextPage() {
    this.navCtrl.push( ChipOnPage )
  }
}
