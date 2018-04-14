import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightpricePage } from './flightprice';

@NgModule({
  declarations: [
    FlightpricePage,
  ],
  imports: [
    IonicPageModule.forChild(FlightpricePage),
  ],
})
export class FlightpricePageModule {}
