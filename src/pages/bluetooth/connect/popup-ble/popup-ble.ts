import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import {BLE} from "@ionic-native/ble";
import {SMS} from "@ionic-native/sms";
import {Geolocation} from "@ionic-native/geolocation";
import {ReadyPage} from "../../ready/ready";


@Component({
  selector: 'page-popup-ble',
  templateUrl: 'popup-ble.html'
})
export class PopUpBle {
  test;
  devices = [];
  isScanning = false;
  public latitude: number;
  public longitude: number;
  public indicator: boolean = false;
  private displayError: any;
  public error_ble;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private geolocation: Geolocation, private ble: BLE, public sms: SMS) {
    this.latitude = 0;
    this.longitude = 0;
    this.isScanning = false;
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
    console.log("SCANNING")
    const ref = this;
    this.ble.isEnabled()
      .then( function () {
        console.log('Start Scan');
        ref.devices = [];
        ref.isScanning = true;
        ref.ble.startScan([]).subscribe(device => {
          ref.devices.push(device);
        },
          error => console.log(error)
        );

        setTimeout(() => {
          ref.error_ble =
          ref.ble.stopScan().then(() => {
            console.log('Scanning has stopped');
            console.log(JSON.stringify(ref.devices))
            ref.isScanning = false;
          });
          ref.test = JSON.stringify(ref.devices);
        }, 5000);
      })
      .catch(function () {
        ref.ble.enable().then( function () {
          console.log('Start Scan');
          ref.devices = [];
          ref.isScanning = true;
          ref.ble.startScan([]).subscribe(device => {
              ref.devices.push(device);
            },
            error => console.log(error)
          );

          setTimeout(() => {
            ref.error_ble =
              ref.ble.stopScan().then(() => {
                console.log('Scanning has stopped');
                console.log(JSON.stringify(ref.devices))
                ref.isScanning = false;
              });
            ref.test = JSON.stringify(ref.devices);
          }, 5000);
        })
      })
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
          val => {
            console.log(this.bytesToString(val))
            if (this.bytesToString(val) === "1.00") {
              console.log("ALERT!");
              this.sendSMS();
            }
          }
        )
        this.navCtrl.push(ReadyPage)
      }
    )
  }

  bytesToString(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }

  sendSMS() {
    const options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: '' // send SMS with the native android SMS messaging
        //intent: '' // send SMS without open any other app
        //intent: 'INTENT' // send SMS inside a default SMS app
      }
    };
    this.sms.send('0625336092', 'ALERT', options)
  }
}
