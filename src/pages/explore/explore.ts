import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FlightpricePage } from '../flightprice/flightprice';

/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  flist: Array<{
    imgurl: String,
    place: String,
    country: String,
    date: String,
    price: Number,
    path:String
  }>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.flist=[{
      imgurl:"assets/imgs/c.jpg",
      place:"Cario",
      country:"Egypt",
      date:"15 Apr",
      price:15902,
      path:"BOM -> CAI"
    },
      {
        imgurl: "assets/imgs/z.jpg",
        place: "Zurich",
        country: "Switzerland",
        date: "23 Apr",
        price: 26118,
        path: "BOM -> ZRH"
      },
      {
        imgurl: "assets/imgs/ch.jpg",
        place: "Chennai",
        country: "India",
        date: "17 Apr",
        price: 3021,
        path: "BOM -> MAA"
      }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');
  }
  open(){
    this.navCtrl.push(FlightpricePage)
  }

}
