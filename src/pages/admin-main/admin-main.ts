import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { ExplorePage } from '../explore/explore';
import { FlightpricePage } from '../flightprice/flightprice';
import { Storage } from '@ionic/storage';
import { Auth } from '../../providers/auth/auth';
import { SmarttipsPage } from '../smarttips/smarttips';
import { MytripsPage } from '../mytrips/mytrips';

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
  way="one"
  ano
  aadhar=true;
  email
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public alertCtrl: AlertController, private datePicker: DatePicker,private storage:Storage,public auth:Auth) {
    this.storage.get('aadhar').then((val)=>{
      if(val!='none' && val!=undefined)
      {
        this.aadhar = false
      }
    })
    this.storage.get('email').then((val) => {
      this.email = val;
    })
  }


  ionViewDidLoad() {
    this.menuCtrl.enable(true)
    console.log('ionViewDidLoad AdminMainPage');
  }
  toggle(){
    this.menuCtrl.open();
  }
  setaadhar(){
   var details={
     email:this.email,
     aadhar:this.ano
   }
    console.log(this.ano)
    if(this.ano.length!=12)
    {
      let alert = this.alertCtrl.create({
        title: 'Aadhar',
        subTitle: 'Invalid Aadhar no',
        buttons: ['Dismiss']
      });
      alert.present();
      return;
    }
    this.auth.aadhar(details).then(() => {
    }
      , (err) => {
       
      });
    let alert = this.alertCtrl.create({
      title: 'Aadhar',
      subTitle: 'Sucessfully Linked Aadhar to your Account',
      buttons: ['Dismiss']
    });
    alert.present();
    this.aadhar = false;
    this.storage.set('aadhar', this.ano)
  }

  from(){
  
    let alert = this.alertCtrl.create();
    alert.setTitle('FROM');

    alert.addInput({
      type: 'radio',
      label: 'Mumbai',
      value: 'Mumbai',
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
      label: 'Mumbai',
      value: 'Mumbai',
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
    var a=new Date(this.datet)
    var b=new Date(this.dateo)
    if (this.f == undefined || this.t == undefined || this.dateo == undefined )
    {
      alert("Enter all the details");
      return;
    }
    else if(a!=undefined && a<b){
      alert('Return date should be after Departure Date')
      return;
    }
    else if(this.f==this.t)
    {
      alert('Source and Destination should be same')
      return;
    }
    else if (b.getMilliseconds<Date.now) {
      alert('Departure Date should be in future')
      return;
    }
    else if (this.way == "two" && this.dateo == undefined)
    {
      alert("Enter all the details");
      return;
    }
    this.storage.set('way',this.way);
    this.storage.set('from', this.f);
    this.storage.set('to', this.t);
    this.storage.set('departure', this.dateo);
    this.storage.set('return', this.datet);
    this.navCtrl.push(FlightpricePage)
  }
  
  tip() {
    this.navCtrl.push(SmarttipsPage)
  }
  trip() {
    this.navCtrl.push(MytripsPage)
  }

}
