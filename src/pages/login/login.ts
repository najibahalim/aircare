import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { TabPage } from '../tab/tab';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string;
  password: string;
  loading: any;

  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController,public alertCtrl:AlertController) {

  }

  ionViewDidLoad() {

    this.showLoader();

    //Check if already authenticated
    this.authService.checkAuthentication().then((res) => {
      console.log("Already authorized");
      this.loading.dismiss();
      this.navCtrl.setRoot(TabPage);
    }, (err) => {
      console.log("Not already authorized");
      this.loading.dismiss();
    });

  }

  login() {

    this.showLoader();

    let credentials = {
      email: this.email,
      password: this.password
    };

    this.authService.login(credentials).then((result) => {
      this.loading.dismiss();
      console.log(result);
      this.navCtrl.setRoot(TabPage);
    }, (err) => {
      this.loading.dismiss();
      alert("Invalid Username or password")
      console.log(err);
    });

  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  showLoader() {

    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();

  }

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  changep() {
    let alert1 = this.alertCtrl.create({
      title: 'Change Password',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
        {
          name: 'password',
          placeholder: 'New Password',
          type: 'password'
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
          text: 'Login',
          handler: data => {
            var details = {
              email: data.email,
              pass: data.password
            }
            this.authService.password(details).then(() => {
            }
              , (err) => {

              });
            let alert = this.alertCtrl.create({
              title: 'Success',
              subTitle: 'Password changes Successfully',
              buttons: ['Dismiss']
            });
            alert.present();
           
          }
        }
      ]
    });

    alert1.present();

   
  }
}