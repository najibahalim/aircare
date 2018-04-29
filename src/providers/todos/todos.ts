import { Injectable, NgZone } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Auth } from '../auth/auth';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class Todos {

  public watch: any;
  public lat: number = 0;
  public lng: number = 0;
  constructor(public http: Http, public authService: Auth, public zone: NgZone, public backgroundGeolocation: BackgroundGeolocation, public geolocation:Geolocation) {

  }
  startTracking() {

    // Background Tracking

    let config = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: true,
      interval: 2000
    };

    this.backgroundGeolocation.configure(config).subscribe((location) => {

      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = location.latitude;
        this.lng = location.longitude;
      });

    }, (err) => {

      console.log(err);

    });

    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();


    // Foreground Tracking

    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

      console.log(position);

      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });

    });

  }

  test1(data,id) {
    var options = {
    };
    let body = new FormData();
    body.append('myImage', data);
    body.append('desc', id);
    this.http.post('http://aircare-kinnari.herokuapp.com/uploadfile', body, options).subscribe(res => {
      console.log(res);
    });
    ;
  }
  stopTracking() {

    console.log('stopTracking');

    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();

  }

  getTodos(id) {

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Authorization', this.authService.token);

      this.http.get('http://aircare-kinnari.herokuapp.com/api/todos/'+id, { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
          //console.log(data)
        }, (err) => {
          reject(err);
        });
    });

  }

  createTodo(todo) {

    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);

      this.http.post('http://aircare-kinnari.herokuapp.com/api/todos', JSON.stringify(todo), { headers: headers })
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