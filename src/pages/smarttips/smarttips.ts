import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { St2Page } from '../st2/st2';

/**
 * Generated class for the SmarttipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-smarttips',
  templateUrl: 'smarttips.html',
})
export class SmarttipsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmarttipsPage');
  }

  show(i){
    var str="";
    switch(i)
    {
      case 1:
        str ="Unlike nonstops, direct flights can touch down at other airports on the way to their ultimate destinations, says Macon Dunnagan, a baggage handler with US Airways. And while stops are built in to the total travel time, the potential delays they can cause aren’t. "
        break;
      case 2:
        str ="It might seem obvious to you that Betsy is a nickname for Elizabeth, but it may not to a skycap, a desk agent, or a security officer―any of whom could ask you to show ID with that name before boarding, says Delta Air Lines public-relations rep Katie Connell."
        break;
      case 3:
        str ="If you have a disability and need a premium seat in the bulkhead, tell the agent when you make your reservation rather than at the airport,” says David Martin, a Delta passenger-service specialist who creates the airline’s policies for customers with disabilities. Other passengers might be able to nab those seats 24 hours before the flight, when they’re made available to everyone through the airline’s website."
        break;
      case 4:
        str = "Since delays stack up as the day progresses, it’s smart to book the first flight you can into a hub [if you have a connecting flight],” says Dunnagan."
        break;
      case 5:
        str = "Some countries―like Chile, Kenya, and India―require a visa for entry; others, like South Africa, won’t allow entrance unless a traveler’s passport contains at least two blank, unstamped pages. You need to be aware of such requirements before you make your flight reservations or you could get stuck Stateside, according to a source at the U.S. Department of State Bureau of Consular Affairs. For a complete list of entrance regulations, visit travel.state.gov//."
        break;
    }
    let profileModal = this.modalCtrl.create(St2Page, { data: str });
    profileModal.present();

  }

}
