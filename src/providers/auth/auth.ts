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
          this.storage.set('dob', data.user.dob);
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
          this.storage.set('dob', data.user.dob);
          resolve(res.json());
        }, (err) => {
          reject(err);
        });

    });

  }

  aadhar(details)
  {
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
     
      //this.http.post('http://aircare-kinnari.herokuapp.com/api/auth/aadhar', JSON.stringify
      this.http.post('http://aircare-kinnari.herokuapp.com/api/auth/aadhar', JSON.stringify
      (details), { headers: headers })
        .subscribe(res => {
          console.log('aadhar link ho gaya')
        }, (err) => {
          reject(err);
        });

    });
    
  }
  password(details) {
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      //this.http.post('http://aircare-kinnari.herokuapp.com/api/auth/aadhar', JSON.stringify
      this.http.post('http://aircare-kinnari.herokuapp.com/api/auth/change', JSON.stringify
        (details), { headers: headers })
        .subscribe(res => {
          console.log('password change ho gaya')
        }, (err) => {
          reject(err);
        });

    });

  }
  mails(details) {
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://aircare-kinnari.herokuapp.com/api/auth/mail', JSON.stringify
      //this.http.post('http://localhost:8080/api/auth/mail', JSON.stringify
        (details), { headers: headers })
        .subscribe(res => {
          console.log('sos')
        }, (err) => {
          reject(err);
        });

    });

  }
  logout() {
    this.storage.set('token', '');
    this.storage.clear();
  }

}