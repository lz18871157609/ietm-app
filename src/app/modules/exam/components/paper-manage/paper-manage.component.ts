import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paper-manage',
  templateUrl: './paper-manage.component.html',
  styleUrls: ['./paper-manage.component.scss'],
})
export class PaperManageComponent implements OnInit {

  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {}
  groupExam() {
    this.navController.navigateForward(['/main/exam/exam-manage/group-exam']);
  }
}
