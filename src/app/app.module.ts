import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation} from "@ionic-native/geolocation";

import { HomePage } from "../pages/home/home";
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { BlePage } from '../pages/bluetooth/connect/bluetooth';
import {ActivatePage} from "../pages/bluetooth/activate/activate";
import { ChipOnPage } from "../pages/bluetooth/chip-on/chip-on";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {BLE} from "@ionic-native/ble";
import {SMS} from "@ionic-native/sms";
import {PopUpBle} from "../pages/bluetooth/connect/popup-ble/popup-ble";
import {ReadyPage} from "../pages/bluetooth/ready/ready";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    HomePage,
    BlePage,
    ActivatePage,
    ChipOnPage,
    PopUpBle,
    ReadyPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    HomePage,
    BlePage,
    ActivatePage,
    ChipOnPage,
    PopUpBle,
    ReadyPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BLE,
    SMS
  ]
})
export class AppModule {}
