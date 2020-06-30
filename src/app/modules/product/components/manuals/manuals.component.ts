import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { PmEntryService } from '../../../../services/pmEntry.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-manuals',
  templateUrl: './manuals.component.html',
  styleUrls: ['./manuals.component.scss'],
})
export class ManualsComponent implements OnInit {
  manualSegment: any;
  manualList: any;
  constructor(
    private menuController: MenuController,
    private navController: NavController,
    private router: Router,
    private file: File,
    private pmEntryService: PmEntryService
  ) { }

  ngOnInit() {
    this.menuController.enable(true, 'manualMenu');
    this.menuController.open('manualMenu');
    this.manualSegment = '1';
    this.loadManualList();
  }
  openManualMenu() {
    this.menuController.enable(true, 'manualMenu');
    this.menuController.open('manualMenu');
    this.manualSegment = '1';
  }

  manualSegmentChanged(event) {
    this.manualSegment = event.detail.value;
    this.toSummary();
  }

  loadManualList() {
    const xmlparse = new DOMParser();
    this.file.readAsText(this.file.externalRootDirectory + 'ietm/pubdata/samples_20170115', 'PMC-S1000DLIGHTING-B6865-EPWG1-00_001-00_en-US.XML').then(response => {
      const xml = xmlparse.parseFromString(response.toString(), 'text/xml');
      this.pmEntryService.analysisPmEntry($(xml as any).find('content'));
    });
  }
  toSummary() {
    const xmlhref = 'xxx';
    this.navController.navigateForward(['/main/product/product-info/manuals/summary']);
  }
}
