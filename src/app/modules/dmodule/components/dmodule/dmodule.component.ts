import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicDmComponentService } from '../../services/dynamic-dm-component.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-dmodule',
  templateUrl: './dmodule.component.html',
  styleUrls: ['./dmodule.component.scss'],
})
export class DmoduleComponent implements OnInit {
  xmlTag = 'dmodule';
  $domdule: any;
  @Input() dataSource;
  @ViewChild('content', {static: true, read: ViewContainerRef}) content: ViewContainerRef;
  constructor() { }

  ngOnInit() {}
  ngOnChanges(changes: any): void {
    if (changes['dataSource'].currentValue !== undefined) {
      this.content.clear();
    }
  }

}
