import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AdminMainPage } from '../admin-main/admin-main';
import { SignupPage } from '../signup/signup';
import { TabPage } from '../tab/tab';
import { LoginPage } from '../login/login';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
    console.log('ionViewDidLoad HomePage');
  }
  login()
  {
    this.navCtrl.push(LoginPage);
    this.menuCtrl.enable(true);
  }
  sign(){
    this.navCtrl.push(SignupPage)
    this.menuCtrl.enable(true);
  }


}
