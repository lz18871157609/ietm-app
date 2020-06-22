import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { SQLiteService } from 'src/app/services/sqlite-service.service';
import { Logger } from 'src/app/common/logger/logger';
import { REQUESTSQL } from 'src/app/services/request.api.service';
@Component({
  selector: 'app-log-manage',
  templateUrl: './log-manage.component.html',
  styleUrls: ['./log-manage.component.scss'],
})
export class LogManageComponent implements OnInit {
  manualsList = [
    {id: '1', title: '作战系统', createTime: '2019-12-20 12:40'},
    {id: '2', title: '电力系统', createTime: '2019-12-20 12:40'},
    {id: '3', title: '船舶辅助系统', createTime: '2019-12-20 12:40'},
    {id: '4', title: '船舶装置系统', createTime: '2019-12-20 12:40'},
    {id: '5', title: '动力系统', createTime: '2019-12-20 12:40'},
    {id: '6', title: '自行车系统', createTime: '2019-12-20 12:40'},
    {id: '7', title: '直升机系统', createTime: '2019-12-20 12:40'},
    {id: '8', title: '作战系统', createTime: '2019-12-20 12:40'},
    {id: '9', title: '电力系统', createTime: '2019-12-20 12:40'},
    {id: '10', title: '作战系统', createTime: '2019-12-20 12:40'},
    {id: '11', title: '自行车系统', createTime: '2019-12-20 12:40'},
    {id: '12', title: '动力系统', createTime: '2019-12-20 12:40'},
    {id: '13', title: '直升机系统', createTime: '2019-12-20 12:40'},
    {id: '14', title: '船舶辅助系统', createTime: '2019-12-20 12:40'}
];
dataSet: any[] = [];
pageIndex = 1;
pageSize = 7;
userInfo: any;
  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController,
    private sqliteService: SQLiteService,
    private logger: Logger,
  ) { }

  ngOnInit() {
    this.userInfo = JSON.parse(sessionStorage.getItem('user'));
    this.sqliteService.executeSql(`${REQUESTSQL.queryAllLogsByUserId}`, []).then((data) => {
      if (data.res.rows && data.res.rows.length >= 1) {
        for(let i = 0; i < data.res.rows.length; i++) {
          this.dataSet = [...this.dataSet, data.res.rows.item(i)];
          this.logger.log(data.res.rows.item(i));
        }
      } else {
          this.logger.log('日志数0');
      }
    }).catch((err) => {
      this.logger.error('查询日志错误', err);
    });
  }

}

