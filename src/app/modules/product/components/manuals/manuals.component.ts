import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSlides, NavController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { PmEntryService } from '../../../../services/pmEntry.service';
import { HttpClient } from '@angular/common/http';
import { FeaturesComponent } from '../modals/features/features.component';
import * as $ from 'jquery';
import { EventService } from '../../../../services/event.service';

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
    private pmEntryService: PmEntryService,
    private http: HttpClient,
    private popoverController: PopoverController,
    private printer: Printer,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.menuController.enable(true, 'manualMenu');
    this.menuController.open('manualMenu');
    this.manualSegment = '1';
   // this.loadManualList();
   this.manualList = [{title: 'xxxx', hrefxml: 'ssdahai'}];
  }
  openManualMenu() {
    this.menuController.enable(true, 'manualMenu');
    this.menuController.open('manualMenu');
    this.manualSegment = '1';
  }

  manualSegmentChanged(event) {
    this.manualSegment = event.detail.value;
  }

  loadManualList() {
    let that = this;
    const xmlparse = new DOMParser();
    this.file.readAsText(this.file.externalRootDirectory + 'ietm/pubdata/samples_20170115', 'PMC-S1000DLIGHTING-B6865-EPWG1-00_001-00_en-US.XML').then(response => {
      const xml = xmlparse.parseFromString(response, 'text/xml');
      const xmlDoc = $.parseXML(response);
      that.manualList = that.pmEntryService.analysisPmEntry($(xmlDoc as any).find('content'));
    })
  }

  toSummary(item) {
    this.menuController.close('manualMenu');
    // this.router.navigate(['/main/product/product-info/manuals/summary'], {queryParams: {menutitle: item.title, hrefxml: item.hrefxml}});
    this.navController.navigateForward(['/main/product/product-info/manuals/summary'], { queryParams: { menutitle: item.title, hrefxml: item.hrefxml } });

  }

  segmentChanged(ev) {
  }
  fullScreen() { }
  print() {
    this.printer.isAvailable().then(response => {
      console.log(response);
    });
    let options: PrintOptions = {
      name: 'MyDocument',
      duplex: true,
      orientation: 'landscape',
    }
    this.printer.print('打印测试', options).then(res => {
      console.log(res);
    });
  }

  async profile(ev) {
    this.eventService.event.emit('profile', 'profile');
      /* const popover = await this.popoverController.create({
        component: FeaturesComponent,
        componentProps: {props: ev},
        event: ev,
        cssClass: 'feature-pop',
        translucent: true
      });
      return popover.present(); */
  }
  highlight() { }
  book() { }
  fontSet() { }
}
