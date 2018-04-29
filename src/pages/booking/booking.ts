import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
import { Admin } from '../../providers/todos/admin';
import { TabPage } from '../tab/tab';
import { PaymentPage } from '../payment/payment';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {


  from="Mumbai"
  to="Cairo"
  adult
  child
  email
  flightname="AirCare airlines"
  flist = {
  imgurl: "assets/imgs/car1.jpeg",
  time: "03:05 -> 05:00 ",
  dur: "6h",
  stop: "nonstop",
  price: 18742,
  depart:"",
  return1:""
}
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Admin, private alertCtrl: AlertController, public storage: Storage, public localNotifications: LocalNotifications) {
    this.storage.get('imgurl').then((val) => {
      this.flist.imgurl = val;
    })
    this.storage.get('time').then((val) => {
      this.flist.time = val;
    })
    this.storage.get('dur').then((val) => {
      this.flist.depart = val;
    })
    this.storage.get('departure').then((val) => {
      this.flist.dur = val;
    })
    this.storage.get('stop').then((val) => {
      this.flist.stop = val;
    })
    this.storage.get('price').then((val) => {
      this.flist.price = val;
    })
    this.storage.get('from').then((val) => {
      this.from = val;
    })
    this.storage.get('to').then((val) => {
      this.to = val;
    })
    this.storage.get('departure').then((val) => {
      this.flist.depart = val;
    })
    this.storage.get('email').then((val) => {
      this.email = val;
    })
    this.storage.get('return').then((val) => {
      this.flist.return1 = val;
      if(val!=undefined)
      {
        this.flist.price=this.flist.price*2;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }

  proceed(){
    if(this.adult==undefined || this.child==undefined)
    {
      alert("Enter passenger details");
    }
    else{
      var details = {
        From: this.from,
        To: this.to,
        flightname: this.flightname,
        imgurl: this.flist.imgurl,
        time: this.flist.time,
        dur: this.flist.dur,
        stop: this.flist.stop,
        price: this.flist.price,
        adult: this.adult,
        child: this.child,
        depart:this.flist.depart,
        return1:this.flist.return1,
        email:this.email
      }
      this.auth.response(details).then(() => {
        this.navCtrl.push(PaymentPage)
      }
        , (err) => {
          
        });
      this.navCtrl.push(PaymentPage)
      this.localNotifications.schedule([{
        text: 'Your ticket has been booked Successfully',
        trigger: { at: new Date(new Date().getTime() + 36000) },
        led: 'FF0000'
      }]);
    }
  }
}
