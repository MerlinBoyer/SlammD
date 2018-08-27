import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public latitude: number;
  public longitude: number;
  public indicator: boolean = false;
  private displayError: any;
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
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



}
