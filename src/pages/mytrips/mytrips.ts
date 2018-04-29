import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Admin } from '../../providers/todos/admin';

/**
 * Generated class for the MytripsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytrips',
  templateUrl: 'mytrips.html',
})
export class MytripsPage {

  trips:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public adminService: Admin) {
  
    this.storage.get('email').then((value) => {
      this.adminService.getQuizzes(value).then((data: any) => {
        this.trips = data;
        console.log(data)
      }, (err) => {
        console.log(err)
        console.log("not allowed");
      }); })
     
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytripsPage');
  }


}
