import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FlightpricePage } from '../flightprice/flightprice';
import { Storage } from '@ionic/storage';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    this.flist=[{
      imgurl:"assets/imgs/c.jpg",
      place:"Cario",
      country:"Egypt",
      date:"15 May",
      price:15902,
      path:"BOM -> CAI"
    },
      {
        imgurl: "assets/imgs/z.jpg",
        place: "Zurich",
        country: "Switzerland",
        date: "3 May",
        price: 26118,
        path: "BOM -> ZRH"
      },
      {
        imgurl: "assets/imgs/s1.jpg",
        place: "Beijing",
        country: "China",
        date: "4 May",
        price: 23456,
        path: "DEL -> PEK"
      },
      {
        imgurl: "assets/imgs/s2.jpg",
        place: "Kathmandu",
        country: "Nepal",
        date: "24 May",
        price: 4534,
        path: "DEL -> KTM"
      },
      {
        imgurl: "assets/imgs/s3.jpg",
        place: "Brisbane",
        country: "Australia",
        date: "24 May",
        price: 5643,
        path: "DEL -> BNE"
      },
      {
        imgurl: "assets/imgs/s4.jpg",
        place: "Srinagar",
        country: "Jammu and Kashmir",
        date: "23 May",
        price: 5635,
        path: "DEL -> SXR"
      },
      {
        imgurl: "assets/imgs/s5.jpg",
        place: "Ottava",
        country: "Canada",
        date: "15 May",
        price: 6356,
        path: "DEL -> YOW"
      },
      {
        imgurl: "assets/imgs/s1.jpg",
        place: "Paris",
        country: "France",
        date: "5 May",
        price: 3267,
        path: "DEL -> CDG"
      },
      {
        imgurl: "assets/imgs/s2.jpg",
        place: "Milano",
        country: "Italy",
        date: "27 May",
        price: 3456,
        path: "BOM -> MXP"
      },
      {
        imgurl: "assets/imgs/s3.jpg",
        place: "Mangalore",
        country: "Karnataka",
        date: "16 May",
        price: 5634,
        path: "BOM -> IXE"
      },
      {
        imgurl: "assets/imgs/s4.jpg",
        place: "Hyderabad",
        country: "Telangana",
        date: "21 May",
        price: 3466,
        path: "BOM -> HYD"
      },
      {
        imgurl: "assets/imgs/s5.jpg",
        place: "Thiruvanthapuram",
        country: "Kerela",
        date: "18 May",
        price: 2345,
        path: "BOM -> TRV"
      },
      {
        imgurl: "assets/imgs/s1.jpg",
        place: "Jodhpur",
        country: "Rajasthan",
        date: "19 May",
        price: 3456,
        path: "BOM -> JDH"
      },
      {
        imgurl: "assets/imgs/s2.jpg",
        place: "Washington",
        country: "United States",
        date: "15 May",
        price: 3456,
        path: "BOM -> WAS"
      },
      {
        imgurl: "assets/imgs/ch.jpg",
        place: "Chennai",
        country: "India",
        date: "17 May",
        price: 3453,
        path: "BOM -> MAA"
      }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');
  }
  open(i){
    this.storage.set('from', this.flist[i].path.substr(0,3));
    this.storage.set('to', this.flist[i].path.substr(7, 3));
    this.storage.set('departure', this.flist[i].date);
    this.navCtrl.push(FlightpricePage);
    
  }

}
