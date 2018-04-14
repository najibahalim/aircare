import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Auth } from '../auth/auth';
import 'rxjs/add/operator/map';

@Injectable()
export class Admin {

  constructor(public http: Http, public authService: Auth, public storage: Storage) {

  }

  getQuiz(id) {

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Authorization', this.authService.token);

      this.http.get('http://aircare-kinnari.herokuapp.com/api/admin/'+id, { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });

  }


  getQuizzes() {

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Authorization', this.authService.token);

      this.http.get('http://aircare-kinnari.herokuapp.com/api/admin/', { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });

  }
  response(resp){
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);
    
      this.storage.get('user').then((val) => { resp.username = val })
      this.http.post('http://aircare-kinnari.herokuapp.com/api/admin/response', JSON.stringify(resp), { headers: headers })
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });

    });
  }
  createQuiz(Q,year,subj,username,noq,status) {

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);
      var Quiz={
        quiz:Q,
        year:year,
        userid:"",
        username:username,
        noq:noq,
        status:status
      }
      this.storage.get('user').then((val)=>{Quiz.userid=val})
      this.http.post('http://aircare-kinnari.herokuapp.com/api/admin/newQuiz', JSON.stringify(Quiz), { headers: headers })
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });

    });

  }

  deleteTodo(id) {

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Authorization', this.authService.token);

      this.http.delete('http://aircare-kinnari.herokuapp.com/api/todos/' + id, { headers: headers }).subscribe((res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });

    });

  }

}