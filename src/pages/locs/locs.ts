import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Todos } from '../../providers/todos/todos';
import { Loc2Page } from '../loc2/loc2';
declare var google;

@IonicPage()
@Component({
  selector: 'page-locs',
  templateUrl: 'locs.html',
})
export class LocsPage {

  // videoOptions:VideoOptions;
  // videoUrl: string = "assets//My Video.mp4";

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  loc="map"
  options: GeolocationOptions;
  currentPos: Geoposition;
  places: Array<any>; 

  constructor(public navCtrl: NavController, public videoPlayer: VideoPlayer, public speechRecognition: SpeechRecognition, public geolocation: Geolocation, public locationTracker:Todos) {

    // this.videoUrl ="assets//My Video.mp4"
    // this.speechRecognition. startListening()
    //   .subscribe(
    //     (matches: Array<string>) => {
    //         console.log(matches[1])
    //     },
    //     (onerror) => console.log('error:', onerror)
    //   )
    
  }
  start() {
    this.locationTracker.startTracking();
  }

  stop() {
    this.locationTracker.stopTracking();
  }
  ngOnInit(){
    // this.speechRecognition.hasPermission()
    //   .then((hasPermission: boolean) => {
    //     if(!hasPermission)
    //     {
    //       this.speechRecognition.requestPermission()
    //         .then(
    //           () => console.log('Granted'),
    //           () => console.log('Denied')
    //         )
    //     }
    //   });

  }
  myInput:String
  onInput($event,to){
    console.log("ehllo");
    this.startNavigating(this.myInput);
  }

  ionViewDidLoad() {
    //this.getUserPosition();
    this.loadMap();
    this.startNavigating("Virar");
  }
  loadMap() {

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  startNavigating(to) {

    this.options = {
      enableHighAccuracy: false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {

      this.currentPos = pos;
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;

      directionsDisplay.setMap(this.map);
      directionsDisplay.setPanel(this.directionsPanel.nativeElement);

      directionsService.route({
        //origin: 'Vasai',
        origin: { lat: this.currentPos.coords.latitude, lng: this.currentPos.coords.longitude },
        destination: to,
        travelMode: google.maps.TravelMode['DRIVING']
      }, (res, status) => {

        if (status == google.maps.DirectionsStatus.OK) {
          document.getElementById("directionsPanel").innerHTML = "";
          directionsDisplay.setDirections(res);
        } else {
          console.warn(status);
        }

      });
      console.log(pos);
      // this.addMap(pos.coords.latitude, pos.coords.longitude);

    }, (err: PositionError) => {
      console.log("error : " + err.message);
      ;
    })
    

  }

 

  



  startvoice(){
    this.speechRecognition.startListening()
      .subscribe(
      (matches: Array<string>) => {
       this.myInput=matches[0];
       this.startNavigating(this.myInput)
        console.log(matches)
      },
        (onerror) => console.log('error:', onerror)
      )
    }


  ionViewDidEnter() {
   // this.getUserPosition();
  } 
  
  getUserPosition() {
    this.options = {
      enableHighAccuracy: false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {

      this.currentPos = pos;

      console.log(pos);
     // this.addMap(pos.coords.latitude, pos.coords.longitude);

    }, (err: PositionError) => {
      console.log("error : " + err.message);
      ;
    })
  }
  addMap(lat, long) {

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.getRestaurants(latLng).then((results: Array<any>) => {
      this.places = results;
      console.log(this.places)
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }, (status) => console.log(status));

    this.addMarker();

  }
  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
  getRestaurants(latLng) {
    var service = new google.maps.places.PlacesService(this.map);
    let request = {
      location: latLng,
      radius: 8047,
      types: ["restaurant"]
    };
    return new Promise((resolve, reject) => {
      service.nearbySearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(status);
        }

      });
    });

  }
  createMarker(place) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location
    });
  } 

  part2(){
    this.navCtrl.push(Loc2Page)
  }
}
