import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';

/**
 * Generated class for the FlightpricePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flightprice',
  templateUrl: 'flightprice.html',
})
export class FlightpricePage {

  flist:Array<{
    imgurl:String,
    time:String,
    dur:String,
    stop:String,
    price:Number
  }>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.flist=[{
      imgurl:"assets/imgs/car1.jpeg",
      time:"03:05 -> 05:00 ",
      dur:"6h",
      stop:"nonstop",
      price: 18742
    },
    {
      imgurl: "assets/imgs/car2.jpg",
      time: "03:05 -> 05:00 ",
      dur: "6h",
      stop: "nonstop",
      price: 18742
    },
    {
      imgurl: "assets/imgs/c3.png",
      time: "03:05 -> 05:00 ",
      dur: "6h",
      stop: "nonstop",
      price: 18742
    },
    {
      imgurl: "assets/imgs/car1.jpeg",
      time: "03:05 -> 05:00 ",
      dur: "6h",
      stop: "nonstop",
      price: 18742
    },
    {
      imgurl: "assets/imgs/c3.png",
      time: "03:05 -> 05:00 ",
      dur: "6h",
      stop: "nonstop",
      price: 18742
    }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightpricePage');
  }
  next(){
    this.navCtrl.push(BookingPage)
  }

}
