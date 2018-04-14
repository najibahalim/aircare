import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocsPage } from './locs';

@NgModule({
  declarations: [
    LocsPage,
  ],
  imports: [
    IonicPageModule.forChild(LocsPage),
  ],
})
export class LocsPageModule {}
