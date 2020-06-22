import { Injectable } from '@angular/core';
import { SQLiteService } from './sqlite-service.service';
import { REQUESTSQL } from './request.api.service';
import { Logger } from '../common/logger/logger';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class LogsService {
    date = new Date();
    userInfo: any;
  constructor(
    private sqliteService: SQLiteService,
    private logger: Logger
  ) { }
  loginSuccess() {
      this.userInfo = JSON.parse(sessionStorage.getItem('user'));
      this.logger.log('用户信息', this.userInfo);
      const params = ['登录', '登录', '登录', '登录', moment(this.date).format('YYYY-MM-DD HH:mm:ss'), this.userInfo.user_id, moment(this.date).format('YYYY-MM-DD HH:mm:ss'), this.userInfo.user_id, 1, ''];
      this.actionLogRequest(params);
  }
  loginOutSuccess() {
    this.userInfo = JSON.parse(sessionStorage.getItem('user'));
    const params = ['登出', '登出', '登出', '登出', moment(this.date).format('YYYY-MM-DD HH:mm:ss'), this.userInfo.user_id, moment(this.date).format('YYYY-MM-DD HH:mm:ss'), this.userInfo.user_id, 1, ''];
    this.actionLogRequest(params);
  }
  addActionSuccess() {}
  deleteActionSuccess() {}
  updateActionSuccess() {}
  loginError(username, msg) {
    const params = ['登录', '登录', username + '登录' + msg, username + '登录' + msg, moment(this.date).format('YYYY-MM-DD HH:mm:ss'), '', moment(this.date).format('YYYY-MM-DD HH:mm:ss'), '', 1, ''];
    this.actionLogRequest(params);
  }
  loginOutError() {}
  addActionError() {}
  deleteActionError() {}
  updateActionError() {}

actionLogRequest(params) {
    this.sqliteService.executeSql(`${REQUESTSQL.addLog}`, params).then((data) => {
        this.logger.log(data);
        if (data.res.rows && data.res.rows.length >= 1) {
            this.logger.log('入库成功');
        } else {
            this.logger.log('入库失败');
        }
      }).catch((err) => {
        this.logger.error('入库错误',err);
      }); 
}
}
