import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Todos } from '../../providers/todos/todos';
import { TextToSpeech } from '@ionic-native/text-to-speech';
declare var google;

@IonicPage()
@Component({
  selector: 'page-loc2',
  templateUrl: 'loc2.html',
})
export class Loc2Page {
  @ViewChild('canvas') canvasEl: ElementRef;
  private _CANVAS: any;
  private _CONTEXT: any;

  url ="assets/imgs/loc1.jpeg"
  url1 ="assets/imgs/loc2.jpg"
  url2 = "assets/imgs/loc3.jpg"
  url3 = "assets/imgs/loc4.jpg"

  dir1="Direction 1"
  dir2 ="Direction 2"
  dir3 = "Direction 3"
  dir4 = "Direction 4"
  dir5 = "Direction 5"
  dir6 = "Direction 6"
  lat=10
  long=30


  @ViewChild('map') mapElement: ElementRef;
  map: any;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  loc = "map"
  options: GeolocationOptions;
  currentPos: Geoposition;
  places: Array<any>;

  constructor(public navCtrl: NavController, public videoPlayer: VideoPlayer, public speechRecognition: SpeechRecognition, public geolocation: Geolocation, public locationTracker: Todos, private tts: TextToSpeech) {
   

  }
  
  ngOnInit() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if(!hasPermission)
        {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }
      });

  }
  myInput: String
  onInput($event, to) {
    console.log("ehllo");
    // this.startNavigating(this.myInput);
    this.tts.speak("Welcome to Mumbai Chhatrapati Shivaji international airport. You are at Terminal 1A. ")
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
    if (this.myInput.toLowerCase() =="terminal 2")
    {
     this. navm = true;
      
      this.url = this.url1;
      this.setupCanvas();
      this.dir1="Walk Straight for 100m"
      this.dir2="Turn Right"
      this.dir3="Walk Straight for 10m"
      this.dir4="Turn Left"
      this.dir5="Go Straight for 0.5 m"
      this.dir6="Take Left"
      this.tts.speak("Welcome to Mumbai Chhatrapati Shivaji international airport. You are at Terminal 1A. ")
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
      this.tts.speak(this.dir1)
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
      setTimeout(() => {
        this.lat = this.lat + 3
        this.long = this.long + 1
        this.setupCanvas();
        this.tts.speak(this.dir2)
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
      }, 10000);
      this.lat = 0;
      this.long = 0;

    }
    else if (this.myInput.toLowerCase() == "terminal 1b") {
      this.navm = true;
      this.url = this.url2;
      this.setupCanvas();
      this.dir1 = "Walk Straight for 120m"
      this.dir2 = "Turn Right"
      this.dir3 = "Walk Straight for 10m"
      this.dir4 = "Turn Left"
      this.dir5 = "You have Reached Airport Hotel"
      this.dir6 = ""
      this.tts.speak("Welcome to Mumbai Chhatrapati Shivaji international airport. You are at Terminal 1A. ")
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
      this.tts.speak(this.dir1)
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
      setTimeout(() => {
        this.lat=this.lat-30
        this.long=this.long+10
        this.setupCanvas();
        this.tts.speak(this.dir2)
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
      }, 10000);
      this.lat=0;
      this.long=0;
    }
    else if (this.myInput.toLowerCase()  == "hotel") {
      this.navm = true;
      this.url = this.url3;
      this.setupCanvas();
      this.dir1 = "Walk Straight for 250m"
      this.dir2 = "Turn Right"
      this.dir3 = "Walk Straight for 30m"
      this.dir4 = "Continue Straight"
      this.dir5 = "You have reached Termial 2"
      this.dir6 = ""
      this.tts.speak("Welcome to Mumbai Chhatrapati Shivaji international airport. You are at Terminal 1A. ")
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
      this.tts.speak(this.dir1)
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
      setTimeout(() => {
        this.lat = this.lat + 30
        this.long = this.long - 10
        this.setupCanvas();
        this.tts.speak(this.dir2)
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
      }, 10000);
      this.lat = 0;
      this.long = 0;
    }
  }

  ionViewDidLoad() {
    //this.getUserPosition();
    //this.loadMap();
    //this.startNavigating("Virar");
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.width = 500;
    this._CANVAS.height = 500;

    this.initialiseCanvas();
    this.drawCircle();
  }
  initialiseCanvas() {
    if (this._CANVAS.getContext) {
      this.setupCanvas();
    }
  }
  setupCanvas() {

    this._CONTEXT = this._CANVAS.getContext('2d');
    //this._CONTEXT.fillStyle = "#3e3e3e";
    //this._CONTEXT.fillRect(0, 0, 500, 500);
    var background = new Image();
    background.src = this.url
    var ctx=this._CONTEXT;
    var ctx1=this;
    background.onload = function () {
    ctx.drawImage(background, 0, 0);
    ctx1.drawCircle();
    }
  


  }
  drawCircle() {
   // this.clearCanvas();
   // this.setupCanvas();
    this._CONTEXT.fillStyle = "#3370d4"; //blue
    this._CONTEXT.beginPath();

    // x, y, radius, startAngle, endAngle
   // this._CONTEXT.arc(this._CANVAS.width / 2, this._CANVAS.height / 2, 80, 0, 2 * Math.PI);
    this._CONTEXT.arc(50+this.lat, 400+this.long, 10, 0, 2 * Math.PI); 
   this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#000000';
    this._CONTEXT.stroke();
    this._CONTEXT.fill();
    // this.lat = this.lat + 15;
    // this.long = this.long - 30;
  }
  

  navm=false;

  nav2(){
   this.setupCanvas();
    
  }
 nav() {

   setTimeout(this.setupCanvas, 5000);
}




  startvoice() {
    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          this.myInput = matches[0];
          this.onInput(null,this.myInput)
          console.log(matches)
        },
        (onerror) => console.log('error:', onerror)
      )
  }




}
