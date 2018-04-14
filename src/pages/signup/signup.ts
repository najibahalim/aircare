import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  fname;
  lname
  mobile
  password
  email
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController,public auth:Auth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  register(){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.fname==undefined || this.lname==undefined || this.mobile==undefined || this.password==undefined || this.email==undefined)
    {
      let alert = this.alertCtrl.create({
        title: 'Register',
        subTitle: 'You must fill in all the fields',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else if(this.mobile.length!=10)
    {
      let alert = this.alertCtrl.create({
        title: 'Register',
        subTitle: 'Mobile no should be of 10 digits',
        buttons: ['Dismiss']
      });
      alert.present();
    }   
    else if (!re.test(this.email)) {
      let alert = this.alertCtrl.create({
        title: 'Register',
        subTitle: 'Enter valid Email id',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else{
      var details={
        email:this.email,
        password:this.password,
        mobile:this.mobile,
        fname:this.fname,
        lname:this.lname
      }
      this.auth.createAccount(details).then(()=>{
        let alert = this.alertCtrl.create({
          title: 'Register',
          subTitle: 'Sucessfully registered',
          buttons: ['Dismiss']
        });
        alert.present();
        this.navCtrl.push(LoginPage)
      }
      , (err) => {
        let alert = this.alertCtrl.create({
          title: 'Register',
          subTitle: 'Error In Registration. Pls Try again later',
          buttons: ['Dismiss']
        });
        alert.present();
      });
    }
  }

}
