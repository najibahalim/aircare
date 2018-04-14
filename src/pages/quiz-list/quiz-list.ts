import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Admin } from '../../providers/todos/admin';
import { LoginPage } from '../login/login';
import { Auth } from '../../providers/auth/auth';

/**
 * Generated class for the QuizListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz-list',
  templateUrl: 'quiz-list.html',
})
export class QuizListPage {
  quizzes:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: Auth, public adminService: Admin) {
  }

  ionViewDidLoad() {
    this.adminService.getQuizzes().then((data: any) => {
      this.quizzes = data;
      console.log(data)
    }, (err) => {
      console.log(err)
      console.log("not allowed");
    });
  }

  open(i){
   var id=this.quizzes[i]._id;
   console.log(id)
  
  }

  addQuiz(){
 
  }

  logout(){
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}
