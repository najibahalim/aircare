import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MytripsPage } from '../mytrips/mytrips';
import { SmarttipsPage } from '../smarttips/smarttips';
import { Auth } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public authService: Auth) {
    this.storage.get('fname').then((value) => { this.fname = value })
    this.storage.get('lname').then((value) => { this.lname = value })
    this.storage.get('email').then((value) => { this.email = value })
    this.storage.get('aadhar').then((value) => { this.aadhar = value })
    this.storage.get('mobile').then((value) => { this.mobile = value })
  }

  fname
  lname
  email
  aadhar
  mobile
  ionViewDidLoad() {
   
  }
  mytrip(){
    this.navCtrl.push(MytripsPage)
  }
  one(){
    this.navCtrl.push(SmarttipsPage)
  }
  logout() {
    this.authService.logout();
    this.navCtrl.setRoot(HomePage);
  }

}
