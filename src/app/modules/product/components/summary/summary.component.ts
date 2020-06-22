import { Component, OnInit } from '@angular/core';
import { Logger } from '../../../../common/logger/logger';
import { HTTP } from '@ionic-native/http/ngx';
import * as $ from 'jquery';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  summarySource: any;
  constructor(
    private http: HTTP,
    private logger: Logger
  ) { }

  ngOnInit() {
    const xmlparse = new DOMParser();
    const url = '../../../../../assets/DMC-BRAKE-AAA-D00-00-00-00AA-00WA-D_001-00_EN-US.XML';
    this.http.sendRequest(url, {
      method: 'get'
    }).then(response => {
      this.logger.log(response);
    });

    this.http.get(url, {}, {}).then(data => {
      this.logger.log(data);
      const xml = xmlparse.parseFromString('', 'text/xml');
      this.logger.log($(xml));
    }).catch(error => {
      this.logger.log(error);
    });
   // this.summarySource = $(xml);
  }

}