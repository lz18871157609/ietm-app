import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { SQLiteService } from '../../../../services/sqlite-service.service';
import { REQUESTSQL } from '../../../../services/request.api.service';
import { Logger} from '../../../../common/logger/logger';
import * as moment from 'moment';
@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
})
export class UserManageComponent implements OnInit {
  manualsList = [];
  dataSet: any[] = [];
  pageIndex = 1;
  pageSize = 7;
  total: number;
  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController,
    private logger: Logger,
    private sqliteService: SQLiteService,
    private navController: NavController
  ) { }

  ngOnInit() {
  this.getUnitData();
   }
  getUnitData() {
    this.sqliteService.executeSql(`${REQUESTSQL.queryAllUserList}`, []).then(data => {
      if (data) {
        for(let i = 0; i < data.res.rows.length; i++) {
          this.dataSet = [...this.dataSet, data.res.rows.item(i)];
        }
      }
    }).catch(err => {
      this.logger.error(err);
    });
  }

  addUserModal() {
    this.navController.navigateForward(['/main/system/system-manage/add-user-modal'], {});
  }
}
