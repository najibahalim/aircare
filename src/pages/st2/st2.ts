import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the St2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-st2',
  templateUrl: 'st2.html',
})

export class St2Page {
  content2:Array<String>
  content:String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
   this.content= this.navParams.get('data')
   this.content2=this.content.split('zz');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad St2Page');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
