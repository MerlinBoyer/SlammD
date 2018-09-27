import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import {BLE} from "@ionic-native/ble";
import {SMS} from "@ionic-native/sms";
import {Geolocation} from "@ionic-native/geolocation";
import {PopUpBle} from "./popup-ble/popup-ble";


@Component({
  selector: 'page-ble',
  templateUrl: 'bluetooth.html'
})
export class BlePage {
  test;
  devices = [];
  isScanning = false;
  public latitude: number;
  public longitude: number;
  public indicator: boolean = false;
  private displayError: any;
  public error_ble;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private geolocation: Geolocation, private ble: BLE, public sms: SMS) {
    this.isScanning = false;
  }

  openModal() {
    let modal = this.modalCtrl.create(PopUpBle,{},{showBackdrop:true, enableBackdropDismiss:true});
    modal.present();
  }
}
