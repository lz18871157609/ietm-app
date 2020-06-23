import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manuals',
  templateUrl: './manuals.component.html',
  styleUrls: ['./manuals.component.scss'],
})
export class ManualsComponent implements OnInit {
  manualSegment: any;
  constructor(
    private menuController: MenuController,
    private navController: NavController,
    private router: Router
  ) { }

  ngOnInit() {
    this.menuController.enable(true, 'manualMenu');
    this.menuController.open('manualMenu');
    this.manualSegment = '1';
  }
  openManualMenu() {
    this.menuController.enable(true, 'manualMenu');
    this.menuController.open('manualMenu');
    this.manualSegment = '1';
  }

  manualSegmentChanged(event) {
    this.manualSegment = event.detail.value;
    this.loadSummary();
  }

  loadSummary() {
    const xmlhref = 'xxx';
    this.navController.navigateForward(['/main/product/product-info/manuals/summary']);
  }
}
