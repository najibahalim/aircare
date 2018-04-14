import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class Auth {

  public token: any;

  constructor(public http: Http, public storage: Storage) {

  }

  checkAuthentication() {

    return new Promise((resolve, reject) => {

      //Load token if exists
      this.storage.get('token').then((value) => {

        this.token = value;

        let headers = new Headers();
        headers.append('Authorization', this.token);

        this.http.get('http://aircare-kinnari.herokuapp.com/api/auth/protected', { headers: headers })
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });

      });

    });

  }

  createAccount(details) {

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
//http://aircare-kinnari.herokuapp.com
      this.http.post('http://aircare-kinnari.herokuapp.com/api/auth/register', JSON.stringify(details), { headers: headers })
        .subscribe(res => {

          let data = res.json();
          this.token = data.token;
          this.storage.set('token', data.token);
          this.storage.set('user', data.user._id);
          this.storage.set('lname', data.user.lname);
          this.storage.set('fname', data.user.fname);
          this.storage.set('mobile', data.user.mobile);
          this.storage.set('email', data.user.email);
          this.storage.set('aadhar', data.user.aadhar);
          resolve(data);

        }, (err) => {
          reject(err);
        });

    });

  }

  login(credentials) {

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://aircare-kinnari.herokuapp.com/api/auth/login', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {

          let data = res.json();
          this.token = data.token;
          this.storage.set('token', data.token);
          resolve(data);
          console.log(data.user._id)
          this.storage.set('user', data.user._id);
          this.storage.set('lname',data.user.lname);
          this.storage.set('fname', data.user.fname);
          this.storage.set('mobile', data.user.mobile);
          this.storage.set('email', data.user.email);
          this.storage.set('aadhar', data.user.aadhar);
          resolve(res.json());
        }, (err) => {
          reject(err);
        });

    });

  }

  logout() {
    this.storage.set('token', '');
  }

}