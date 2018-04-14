import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizListPage } from './quiz-list';

@NgModule({
  declarations: [
    QuizListPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizListPage),
  ],
})
export class QuizListPageModule {}
