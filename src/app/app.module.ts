import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { Todos } from '../providers/todos/todos';
import { Auth } from '../providers/auth/auth';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { Admin } from '../providers/todos/admin';
import { AdminMainPage } from '../pages/admin-main/admin-main';
import { QuizListPage } from '../pages/quiz-list/quiz-list';
import { FlightpricePage } from '../pages/flightprice/flightprice';
import { ExplorePage } from '../pages/explore/explore';
import { TabPage } from '../pages/tab/tab';
import { ProfilePage } from '../pages/profile/profile';
import { LocsPage } from '../pages/locs/locs';
import { Mapp } from '../providers/mapP';
import { Gmap } from '../providers/gmaps';
import { Network } from '@ionic-native/network';
import { Locations } from '../providers/loc';
import { Geolocation } from '@ionic-native/geolocation';
import { BookingPage } from '../pages/booking/booking';
import { PaymentPage } from '../pages/payment/payment';
import { Push } from '@ionic-native/push';
import { DatePicker } from '@ionic-native/date-picker'
import { MytripsPage } from '../pages/mytrips/mytrips';
import { SmarttipsPage } from '../pages/smarttips/smarttips';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    FlightpricePage,
    AdminMainPage,
    ExplorePage,
    SignupPage,
    QuizListPage,
    TabPage,
    ProfilePage,
    LocsPage,
    BookingPage,
    PaymentPage,
    MytripsPage,
    SmarttipsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    FlightpricePage,
    AdminMainPage,
    ExplorePage,
    QuizListPage,
    SignupPage,
    TabPage,
    ProfilePage,
    LocsPage,
    BookingPage,
    PaymentPage,
    MytripsPage,
    SmarttipsPage
  ],
  providers: [Storage, Todos, Auth, StatusBar,
    SplashScreen,Admin,Mapp,Gmap,Network,Locations,Geolocation,Push,DatePicker]
})
export class AppModule { }