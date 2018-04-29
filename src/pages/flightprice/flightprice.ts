import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';
import { Storage } from '@ionic/storage';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    this.flist=[{
      imgurl:"assets/imgs/car1.jpeg",
      time:"03:05 -> 09:00 ",
      dur:"6h",
      stop:"nonstop",
      price: 14564
    },
    {
      imgurl: "assets/imgs/car2.jpg",
      time: "15:05 -> 21:00 ",
      dur: "6h",
      stop: "nonstop",
      price: 3453
    },
    {
      imgurl: "assets/imgs/c3.png",
      time: "21:05 -> 3:00 ",
      dur: "6h",
      stop: "nonstop",
      price: 3451
    },
    {
      imgurl: "assets/imgs/car1.jpeg",
      time: "23:05 -> 6:00 ",
      dur: "8h",
      stop: "1 stop",
      price: 31245
    },
      {
        imgurl: "assets/imgs/car2.jpg",
        time: "23:05 -> 6:00 ",
        dur: "8h",
        stop: "1 stop",
        price: 23445
      },
      {
        imgurl: "assets/imgs/car1.jpeg",
        time: "23:05 -> 6:00 ",
        dur: "8h",
        stop: "1 stop",
        price: 3456
      },
      {
        imgurl: "assets/imgs/c3.png",
        time: "23:05 -> 6:00 ",
        dur: "8h",
        stop: "1 stop",
        price: 3422
      },
      {
        imgurl: "assets/imgs/c3.png",
        time: "23:05 -> 6:00 ",
        dur: "8h",
        stop: "1 stop",
        price: 3156
      },
      {
        imgurl: "assets/imgs/car1.jpeg",
        time: "23:05 -> 6:00 ",
        dur: "8h",
        stop: "1 stop",
        price: 3456
      },
    {
      imgurl: "assets/imgs/c3.png",
      time: "3:05 -> 23:00 ",
      dur: "12h",
      stop: "2 stops",
      price: 3456
    }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightpricePage');
  }
  next(i){
    this.storage.set('imgurl', this.flist[i].imgurl);
    this.storage.set('time', this.flist[i].time);
    this.storage.set('dur', this.flist[i].dur);
    this.storage.set('stop', this.flist[i].stop);
    this.storage.set('price', this.flist[i].price);
    this.navCtrl.push(BookingPage)
  }

}
