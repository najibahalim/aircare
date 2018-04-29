import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { SmarttipsPage } from '../smarttips/smarttips';
import { MytripsPage } from '../mytrips/mytrips';
import { St2Page } from '../st2/st2';
import { Todos } from '../../providers/todos/todos';
import { Auth } from '../../providers/auth/auth';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user
  lname
  fname
  mobile
  email
  aadhar
  dob
  url ="assets/imgs/profile.png";
  able=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public reviewService: Todos, public alertCtrl: AlertController, public authService: Auth, public geolocation: Geolocation) {
    this.getUserPosition();
    this.storage.get('user').then((value) => { this.user = value;
      console.log(value)
      this.reviewService.getTodos(value).then((data: any) => {
       if(data.length!=0)
       {
         this.url = "http://aircare-kinnari.herokuapp.com/" + data[0].path;
         console.log(data)
         this.able = true;
       }
      }, (err) => {
        console.log(err)
        console.log("not allowed");
      });
    })
    this.storage.get('lname').then((value) => { this.lname = value })
    this.storage.get('fname').then((value) => { this.fname = value })
    this.storage.get('mobile').then((value) => { this.mobile = value })
    this.storage.get('email').then((value) => { this.email = value })
    this.storage.get('dob').then((value) => { this.dob = value })
    this.storage.get('aadhar').then((value) => { if (value != undefined) { this.aadhar = value.substr(0, 4) + "-XXXXX- " + value.substr(9, 4)} })

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    
  }
  logout() {

    this.storage.set('token', '');
    this.navCtrl.setRoot(HomePage);

  }
  tip(){
    this.navCtrl.push(SmarttipsPage)
  }
  trip(){
    this.navCtrl.push(MytripsPage)
  }
  file: any;
  next() {
    this.file = document.getElementById('myFile')
    this.file = this.file.files[0];
    console.log(this.file)
    this.reviewService.test1(this.file,this.user);
    setTimeout(() => {
      console.log('Test');
      this.next1();
    }, 10000);
    
  }
  next1(){
    this.reviewService.getTodos(this.user).then((data: any) => {
      if (data.length != 0) {
        this.url = "http://aircare-kinnari.herokuapp.com/" + data[0].path;
        console.log(data)
        this.able = true;
      }
    }, (err) => {
      console.log(err)
      console.log("not allowed");
    });
  }
  sos(){
    let alert1 = this.alertCtrl.create({
      title: 'SOS',
      inputs: [
        {
          name: 'desc',
          placeholder: 'Enter Description (if any)'
        },
        {
          name: 'mailsos',
          placeholder: 'Enter Email if Required (Else sos will be sent to main authority'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            if(this.currentPos==undefined)
            {
              let alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Location not found',
                buttons: ['Dismiss']
              });
              alert.present();
              return;
            }
            var details = {
              email:this.fname+' ('+ this.email +') mobile: '+this.mobile+'<br> location: latitude- '+this.currentPos.coords.latitude+' longitude- '+this.currentPos.coords.longitude,
              desc:data.desc,
              mailsos:data.mailsos
              
            }
            this.authService.mails(details).then(() => {
            }
              , (err) => {

              });
            let alert = this.alertCtrl.create({
              title: 'Success',
              subTitle: 'SOS sent Successfully!',
              buttons: ['Dismiss']
            });
            alert.present();

          }
        }
      ]
    });

    alert1.present();

    
  }
  edit(par) {
    let alert1 = this.alertCtrl.create({
      title: 'Edit',
      inputs: [
        {
          name: 'nv',
          placeholder: 'Enter new Value'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            if (par == 'fname') {
              this.fname=data.nv
            } else if (par == 'lname') {
              this.lname = data.nv
            }
            else if (par == 'mob') {
              this.mobile = data.nv
            }
            else {
              this.dob = data.nv
            }
          }
        }
      ]
    });

    alert1.present();
   
  }
  options: GeolocationOptions;
  currentPos: Geoposition;
  getUserPosition() {
    this.options = {
      enableHighAccuracy: false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {

      this.currentPos = pos;

      console.log(pos);

    }, (err: PositionError) => {
      console.log("error : " + err.message);
      ;
    })
  }

  


}
