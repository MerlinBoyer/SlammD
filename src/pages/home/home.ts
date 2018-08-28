import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BLE} from "@ionic-native/ble";
import {SMS} from "@ionic-native/sms";
import {Geolocation} from "@ionic-native/geolocation";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  test;
  devices = [];
  isScanning = false;
  public latitude: number;
  public longitude: number;
  public indicator: boolean = false;
  private displayError: any;

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private ble: BLE, public sms: SMS) {
    this.latitude = 0;
    this.longitude = 0;
  }

  onClickLocation() {
    this.indicator = !this.indicator;
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    this.geolocation.getCurrentPosition( options ).then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      this.displayError = error.message;
    });
  }


  scan() {
    console.log('Start Scan');
    this.devices = [];
    this.isScanning = true;
    this.ble.startScan([]).subscribe(device => {
      this.devices.push(device);
    });

    setTimeout(() => {
      this.ble.stopScan().then(() => {
        console.log('Scanning has stopped');
        console.log(JSON.stringify(this.devices))
        this.isScanning = false;
      });
      this.test = JSON.stringify(this.devices);
    }, 5000);
  }

  connectToDevice(device) {
    console.log('Connect To Device');
    console.log(JSON.stringify(device))
    let connected_device;
    this.ble.connect(device.id).subscribe(
      val => {
        connected_device = JSON.parse(JSON.stringify(val));
        console.log(JSON.stringify(val))
        console.log(connected_device.id)
        this.ble.startNotification(connected_device.id, '6E400001-B5A3-F393-E0A9-E50E24DCCA9E', '6E400003-B5A3-F393-E0A9-E50E24DCCA9E').subscribe(
          val => console.log(this.bytesToString(val))
        )
      }
    )
  }

  bytesToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }

  sendSMS() {
    this.sms.send('0899314654', 'coucou toi')
  }
}
