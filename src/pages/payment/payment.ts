import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { TabPage } from '../tab/tab';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  a
  c

  constructor(public navCtrl: NavController, public navParams: NavParams, private push: Push, public alertCtrl: AlertController, public localNotifications: LocalNotifications, public platform: Platform) {
    this.localNotifications.schedule([{
      text: 'Flight is expected on time',
      trigger: { at: new Date(new Date().getTime() + 360000) },
      led: 'FF0000'
    }]);
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  pushMessage: string = 'push message will be displayed here';
  next(){
    if(this.a.length!=16 || this.c.length!=3)
    {
      alert("Enter details Properly!");
      return;
    }
   alert('Payment recieved Successfully');
    // this.localNotifications.schedule([{
    //   text: 'Your Flight is Scheduled on Time ',
    //   trigger: { at: new Date(new Date().getTime() + 3600) },
    //   led: 'FF0000',
    //   sound: null
    // },
    //   {
    //     text: 'Your Flight is delayed by 1 hr ',
    //     trigger: { at: new Date(new Date().getTime() + 8000) },
    //     led: 'FF0000',
    //     sound: null
    //   }]);
    this.localNotifications.schedule([{
      text: 'Queue is Expected at Security Check-In ',
      trigger: { at: new Date(new Date().getTime() + 360000) },
      led: 'FF0000'
    }]);
   this.navCtrl.push(TabPage)
  }


  
  
}
