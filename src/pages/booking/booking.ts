import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
import { Admin } from '../../providers/todos/admin';
import { TabPage } from '../tab/tab';
import { PaymentPage } from '../payment/payment';

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
  flightname="Ethopian airlines"
  flist = {
  imgurl: "assets/imgs/car1.jpeg",
  time: "03:05 -> 05:00 ",
  dur: "6h",
  stop: "nonstop",
  price: 18742
}
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Admin, private alertCtrl:AlertController) {
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
        child: this.child
      }
      this.auth.response(details).then(() => {
        this.navCtrl.push(PaymentPage)
      }
        , (err) => {
          let alert1 = this.alertCtrl.create({
            title: 'Booking',
            subTitle: 'Error In Booking. Pls Try again later',
            buttons: ['Dismiss']
          });
          alert1.present();
        });
      this.navCtrl.push(PaymentPage)
    }
  }
}
