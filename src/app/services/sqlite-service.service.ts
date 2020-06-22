import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { SQLite, SQLiteObject, SQLiteTransaction } from '@ionic-native/sqlite/ngx';
import { SQLITE } from './SqliteConstants';
import { REQUESTSQL } from './request.api.service';
import { Logger } from '../common/logger/logger';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class SQLiteService {
  //window对象
  private win: any = window;
  //数据库对象
  private database: SQLiteObject;
  //是否android环境
  private isAndroid: boolean;
  private sql: any;
  constructor(
    private sqlite: SQLite,
    private device: Device,
    private platform: Platform,
    private toast: Toast,
    private logger: Logger,
    private sqlitePorter: SQLitePorter,
    private httpClient: HttpClient,
    private sqliteDbCopy: SqliteDbCopy
  ) { }
  /**
   * 程序初始化创建数据库
   * @param dbName 
   */
  initSqliteDB(dbName) {
    this.logger.log('初始化数据库配置', this.platform);
    /* if (!this.win.sqlitePlugin) {
      this.database = this.win.openDatabase('ietm.db', '1.0', 'database', 5 * 1024 * 1024);
      this.logger.log('初始化数据库配置1', this.database);
      return;
    } */
    if (this.platform.is('android')) {
      this.logger.log('初始化android数据库配置');
      this.sqlite.create({
        name: dbName,
        location: SQLITE.ANDROID.location,
        createFromLocation: 1
      }).then((db) => {
        this.logger.log('db', db);
        this.database = db;
      }).catch(err => {
        this.logger.error(err);
      });
    }
  }

  /**
   * 初始化数据库
   */
  initDb() {
    // 检查sdcard/ietm 目录下是否存在ietm.db数据库
    this.sqliteDbCopy.checkDbOnStorage('ietm.db', '/sdcard/ietm/').then((res) => {
      this.logger.log('checkDbOnStoragethen', res);
      if (res.code === 200) {
        // 存在 拷贝sdcard/ietm/ietm.db 数据到程序中 调用
    this.sqliteDbCopy.copyDbFromStorage('ietm.db', 0, '/sdcard/ietm/ietm.db', false).then((res) => {
      this.initSqliteDB('ietm.db');
    }).catch((error: any) => {
      if (error.code === 516) {
        this.initSqliteDB('ietm.db');
      }
    });
      }
    }).catch((err) => {
      this.logger.log('checkDbOnStorageerr', err);
    });
  }
  insertUser() {
    let date = new Date();
    let sql = 'insert into sys_user values(?,?,?,?,?,?,?,?,?,?,?,?)';
    let params = [2, 'admin', '123', 'admin', '18977776666', 'admin', '管理员', date, 1, date, 1, 1];
    this.executeSql(REQUESTSQL.addUser, params).then((data) => {
      this.logger.log('sys_user表插入数据成功');
    }).catch((err) => {
      this.logger.error('sys_user表插入数据失败', err);
    });
  }

  selectUser() {
    let sql = 'select * from sys_user';
    this.executeSql(REQUESTSQL.queryAllUserList, {}).then((data) => {
      this.logger.log('Successfully read from pre-populated DB:');
      this.logger.log(data.res.rows.item);
      for (let i = 0; i < data.res.rows.length; i++) {
      this.logger.log(data.res.rows.item(i));
      }
      this.sqlitePorter.exportDbToJson(this.database).then((json) => {
        this.logger.log('exportJson', json);
      });

    }).catch((err) => {
      this.logger.error('users表查询失败', err);
    });
  }

  getSqliteSql() {
    this.httpClient.get('../../assets/sql/ietm.json').subscribe(res => {
      this.logger.log('获取到sql:', JSON.stringify(res));
      this.sql = JSON.stringify(res);
    })
  }

/**
 * 执行sql操作
 * @param sql 脚本
 * @param params 参数
 */
  executeSql(sql: string, params: any = []): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.database.transaction((tx: SQLiteTransaction) => {
          tx.executeSql(sql, params, (tx, res) => {
            resolve({ tx: tx, res: res });
          }, (tx, err) => {
            reject({ t: tx, err: err });
          });
        });
      }
      catch (err) {
        reject({ err: err });
      }
    });
  }

  getUUID() {
    return 'xxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    }
    );
  }
}
