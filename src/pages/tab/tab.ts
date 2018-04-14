import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminMainPage } from '../admin-main/admin-main';
import { ExplorePage } from '../explore/explore';
import { ProfilePage } from '../profile/profile';
import { LocsPage } from '../locs/locs';

/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  tab1Root: any = AdminMainPage;
  tab2Root: any = ExplorePage;
  tab3Root: any = ProfilePage
  tab4Root: any=LocsPage;
  mySelectedIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mySelectedIndex = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
