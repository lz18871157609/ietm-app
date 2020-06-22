import { Component, OnInit, ViewChild } from '@angular/core';
import { Logger } from 'src/app/common/logger/logger';
import { IonReorderGroup } from '@ionic/angular';
@Component({
  selector: 'app-group-exam',
  templateUrl: './group-exam.component.html',
  styleUrls: ['./group-exam.component.scss'],
})
export class GroupExamComponent implements OnInit {
  @ViewChild(IonReorderGroup, {static: false}) reorderGroup: IonReorderGroup;
  constructor(
    private logger: Logger
  ) { }

  ngOnInit() {}

  /**
   * 重新排序
   * @param event
   */
  doReorder(event) {
    this.logger.log(event);
    event.detail.complete();
  }
}
