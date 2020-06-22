import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicManageComponent } from './components/topic-manage/topic-manage.component';
import { ExamManageComponent } from './components/exam-manage/exam-manage.component';
import { ToExamComponent } from './components/to-exam/to-exam.component';
import { PaperManageComponent } from './components/paper-manage/paper-manage.component';
import { AddTopicModalComponent } from './components/modals/add-topic-modal/add-topic-modal.component';
import { GroupExamComponent } from './components/group-exam/group-exam.component';
const routes: Routes = [
  {path: 'exam-manage', component: ExamManageComponent,
children: [
  {path: 'to-exam', component: ToExamComponent},
  {path: 'topic-manage', component: TopicManageComponent},
// children: [{path: 'add-topic-modal', component: AddTopicModalComponent}]
  {path: 'add-topic-modal', component: AddTopicModalComponent},
  {path: 'paper-manage', component: PaperManageComponent},
  {path: 'group-exam', component: GroupExamComponent}
]
},
  {path: '', redirectTo: 'exam-manage', pathMatch: 'fill'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule {}
