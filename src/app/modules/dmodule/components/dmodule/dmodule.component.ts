import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicDmComponentService } from '../../services/dynamic-dm-component.service';

@Component({
  selector: 'app-dmodule',
  templateUrl: './dmodule.component.html',
  styleUrls: ['./dmodule.component.scss'],
})
export class DmoduleComponent implements OnInit {
  xmlTag = 'dmodule';
  $domdule: any;
  @Input() dataSource;
  @ViewChild('content', {static: false, read: ViewContainerRef}) content: ViewContainerRef;
  constructor() { }

  ngOnInit() {}
  ngOnChanges(changes: any): void {
    if (changes['dataSource'].currentValue !== undefined) {
      this.content.clear();
    }
  }

}
