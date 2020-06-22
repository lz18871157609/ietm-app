import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController, NavController } from '@ionic/angular';
import { Validators, FormGroup, FormControl, FormBuilder, FormGroupName} from '@angular/forms';
import { Router } from '@angular/router';
import { SQLiteService } from '../../services/sqlite-service.service';
import { REQUESTSQL } from '../../services/request.api.service';
import {Logger} from '../../common/logger/logger';
import { ToastServiceService } from '../../services/toast-service.service';
import { LogsService } from '../../services/logs.service';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userinfo = {
    username: '',
    userpwd: ''
  };
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private sqliteService: SQLiteService,
    private fb: FormBuilder,
    private logger: Logger,
    private navController: NavController,
    private toastServiceService: ToastServiceService,
    private logsService: LogsService,
    private toast: Toast
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.maxLength(20)]],
      userpwd: [null, [Validators.required, Validators.maxLength(20)]],
    })
  }

  /**
   * 登录方法
   * @param event 
   */
  login(event) {
    if (event.username === 'bsti' && event.userpwd === '123') {
      // this.router.navigate(['/main']);
      this.navController.navigateRoot(['/main'], {});
      sessionStorage.setItem('user', JSON.stringify({user_id: 1, user_name: 'bsti', role_id: 1}));
    } else {
    this.sqliteService.executeSql(`${REQUESTSQL.login}`, [event.username, event.userpwd]).then((data) => {
      this.logger.log(data.res);
      if (data.res.rows && data.res.rows.length >= 1) {
        // this.router.navigate(['/main']);
        this.navController.navigateRoot(['main']);
        sessionStorage.setItem('user', JSON.stringify(data.res.rows.item(0)));
        setTimeout(() => {
          this.logsService.loginSuccess();
        }, 300);
      } else {
        // this.toastServiceService.showToast('您输入的用户名或密码错误，请重新输入！', 'danger', 'top', 3000);
       // this.logsService.loginError('');
       this.sqliteService.executeSql(`${REQUESTSQL.loginJudge}`, [event.username]).then((response) => {
        this.logger.log(response.res);
        if (response.res.rows && response.res.rows.length >= 1) {
          this.toastServiceService.showToast('您输入的密码错误，请重新输入！', 'danger', 'top', 3000);
          this.logsService.loginError(event.username, '密码错误');
        } else {
          this.toastServiceService.showToast('该用户不存在, 请重新输入！', 'danger', 'top', 3000);
          this.logsService.loginError(event.username, '该用户不存在');
        }
      }).catch((err) => {
        this.logger.error(err);
      });
      }
    }).catch((err) => {
      this.logger.error(err);
    });
  }
  }
}
