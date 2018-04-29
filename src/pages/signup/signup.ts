import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Auth } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { DatePicker } from '@ionic-native/date-picker';
import { St2Page } from '../st2/st2';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public auth: Auth, private datePicker: DatePicker) {
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
    else if (this.password.length < 8) {
      let alert = this.alertCtrl.create({
        title: 'Register',
        subTitle: 'Password should be atleast of 8 characters',
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
        lname:this.lname,
        dob:this.dob
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
  dob
  t1() {

    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      (date) =>{this.dob = date;this.dob=this.dob.substr(0,10)},
      err => console.log('Error occurred while getting date: ', err)
    );

  }
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  more(){
    this.navCtrl.push(St2Page, {
      data: "Terms and ConditionszzThese Application Standard Terms and Conditions written on this page shall manage your use of this application.These Terms will be applied fully and affect to your use of this application.By using this application, you agreed to accept all terms and conditions written in here.You must not use this application if you disagree with any of these application Standard Terms and Conditions.zzMinors or people below 18 years old are not allowed to use this application.zz1.  Intellectual Property RightszzOther than the content you own, under these Terms, and/or its licensors own all the intellectual property rights and materials contained in this application.zzYou are granted limited license only for purposes of viewing the material contained on this application.zz2.  RestrictionszzYou are specifically restricted from all of the followingzz•	publishing any application material in any other media; zz•	selling, sublicensing and / or otherwise commercializing any application material; zz•	publicly performing and/or showing any application material;zz •	using this application in any way that is or may be damaging to this application; zz•	using this application in any way that impacts user access to this application; zz•	using this application contrary to applicable laws and regulations, or in any way may cause harm to the application, or to any person or business entity; zz•	engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this application; zz•	using this application to engage in any advertising or marketing.zzCertain areas of this application are restricted from being access by you and may further restrict access by you to any areas of this application, at any time, in absolute discretion.Any user ID and password you may have for this application are confidential and you must maintain confidentiality as well.zz3.  Your ContentzzIn these application Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this application.By displaying Your Content, you grant  a non - exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.zzYour Content must be your own and must not be invading any third-party’s rights.reserves the right to remove any of Your Content from this application at any time without notice.zz4.  No warrantieszzThis application is provided “as is, ” with all faults, and  express no representations or warranties, of any kind related to this application or the materials contained on this application.Also, nothing contained on this application shall be interpreted as advising you.zz5.  Limitation of liabilityzzIn no event shall, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this application whether such liability is under contract.  , including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this application.zz6ˆ.IndemnificationzzYou hereby indemnify to the fullest extent  from and against any and / or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.zz7.  SeverabilityzzIf any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.zz8.  Variation of Termszzis permitted to revise these Terms at any time as it sees fit, and by using this application you are expected to review these Terms on a regular basis.zz9˘.AssignmentzzThe  is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.zz10.  Entire AgreementzzThese Terms constitute the entire agreement between  and you in relation to your use of this application, and supersede all prior agreements and understandings.zz11.  Governing Law & JurisdictionzzThese Terms will be governed by and interpreted in accordance with the laws of the State of, and you submit to the non - exclusive jurisdiction of the state and federal courts located in  for the resolution of any disputes.zz"})
  }


}
