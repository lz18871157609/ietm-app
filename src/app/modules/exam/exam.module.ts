import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ExamRoutingModule } from './exam-routing.module';
import { TopicManageComponent } from './components/topic-manage/topic-manage.component';
import { ExamManageComponent } from './components/exam-manage/exam-manage.component';
import { ToExamComponent } from './components/to-exam/to-exam.component';
import { PaperManageComponent } from './components/paper-manage/paper-manage.component';
import { AddTopicModalComponent} from './components/modals/add-topic-modal/add-topic-modal.component';
import { GroupExamComponent } from './components/group-exam/group-exam.component';
const EXAMCOMPONENTS = [
  TopicManageComponent,
  ExamManageComponent,
  ToExamComponent,
  PaperManageComponent,
  AddTopicModalComponent,
  GroupExamComponent
];
@NgModule({
  declarations: [
    ...EXAMCOMPONENTS
  ],
  /* entryComponents: [
    AddTopicModalComponent
  ], */
  imports: [
    CommonModule,
    IonicModule,
    IonicModule.forRoot(),
    ExamRoutingModule
  ]
})
export class ExamModule { }
