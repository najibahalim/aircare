import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmarttipsPage } from './smarttips';

@NgModule({
  declarations: [
    SmarttipsPage,
  ],
  imports: [
    IonicPageModule.forChild(SmarttipsPage),
  ],
})
export class SmarttipsPageModule {}
