import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';
declare var Connection;

@Injectable()
export class Mapp {


  onDevice: boolean;

  constructor(public platform: Platform) {
    this.onDevice = this.platform.is('cordova');
    console.log(navigator['connection'])
  }

  isOnline(): boolean {
    if (this.onDevice && navigator['connection']) {
      return navigator['connection'] !== Connection.NONE;
    } else {
      return navigator.onLine;
    }
  }

  isOffline(): boolean {
    if (this.onDevice && navigator['connection']) {
      return navigator['connection'] === Connection.NONE;
    } else {
      return !navigator.onLine;
    }
  }

}