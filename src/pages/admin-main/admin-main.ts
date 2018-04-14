import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { ExplorePage } from '../explore/explore';
import { FlightpricePage } from '../flightprice/flightprice';

/**
 * Generated class for the AdminMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-main',
  templateUrl: 'admin-main.html',
})
export class AdminMainPage {

  dateo
  datet
  classt
  testRadioOpen = false;
  testRadioResult: any;
  f
  t
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public alertCtrl: AlertController, private datePicker: DatePicker) {
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true)
    console.log('ionViewDidLoad AdminMainPage');
  }
  toggle(){
    this.menuCtrl.open();
  }

  from(){
  
    let alert = this.alertCtrl.create();
    alert.setTitle('FROM');

    alert.addInput({
      type: 'radio',
      label: 'Bombay',
      value: 'Bombay',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Chennai',
      value: 'Chennai'
    });

    alert.addInput({
      type: 'radio',
      label: 'Delhi',
      value: 'Delhi'
    });

    alert.addInput({
      type: 'radio',
      label: 'Bhopal',
      value: 'Bhopal'
    });

    alert.addInput({
      type: 'radio',
      label: 'Sydney',
      value: 'Sydney'
    });

    alert.addInput({
      type: 'radio',
      label: 'London',
      value: 'London'
    });

    alert.addInput({
      type: 'radio',
      label: 'New York',
      value: 'New York'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.f=data
      }
    });

    alert.present();
  }
  
  To() {

    let alert = this.alertCtrl.create();
    alert.setTitle('FROM');

    alert.addInput({
      type: 'radio',
      label: 'Bombay',
      value: 'Bombay',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Chennai',
      value: 'Chennai'
    });

    alert.addInput({
      type: 'radio',
      label: 'Delhi',
      value: 'Delhi'
    });

    alert.addInput({
      type: 'radio',
      label: 'Bhopal',
      value: 'Bhopal'
    });

    alert.addInput({
      type: 'radio',
      label: 'Sydney',
      value: 'Sydney'
    });

    alert.addInput({
      type: 'radio',
      label: 'London',
      value: 'London'
    });

    alert.addInput({
      type: 'radio',
      label: 'New York',
      value: 'New York'
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.t=data
      }
    });

    alert.present();
  }

  d1()
  {

    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log(this.dateo=date),
      err => console.log('Error occurred while getting date: ', err)
    );

  }

  d2(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log(this.datet = date),
      err => console.log('Error occurred while getting date: ', err)
    );

  }

  c(){

    let alert = this.alertCtrl.create();
    alert.setTitle('FROM');

    alert.addInput({
      type: 'radio',
      label: 'Economy',
      value: 'Economy',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'First Class',
      value: 'First Class'
    });

    alert.addInput({
      type: 'radio',
      label: 'Business Class',
      value: 'Business Class'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.classt = data
      }
    });

    alert.present();
  }

  next(){
    this.navCtrl.push(FlightpricePage)
  }
  

}
