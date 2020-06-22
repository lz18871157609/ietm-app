import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-operate-train',
  templateUrl: './operate-train.component.html',
  styleUrls: ['./operate-train.component.scss'],
})
export class OperateTrainComponent implements OnInit {

  constructor(
    private menuController: MenuController
  ) { }

  ngOnInit() {
    this.menuController.enable(true, 'operateMenu');
    this.menuController.open('operateMenu');
  }

  toggleOperateMenu() {
    this.menuController.enable(true, 'operateMenu');
    this.menuController.open('operateMenu');
  }
}
