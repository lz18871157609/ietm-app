import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-maintain-train',
  templateUrl: './maintain-train.component.html',
  styleUrls: ['./maintain-train.component.scss'],
})
export class MaintainTrainComponent implements OnInit {
  constructor(
    private menuController: MenuController
  ) { }

  ngOnInit() {
    this.menuController.enable(true, 'maintainMenu');
    this.menuController.open('maintainMenu');
  }

  toggleMaintainMenu() {
    this.menuController.enable(true, 'maintainMenu');
    this.menuController.open('maintainMenu');
  }
}
