import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { SQLiteService } from '../../services/sqlite-service.service';
import { ToastServiceService} from '../../services/toast-service.service';
import { REQUESTSQL } from '../../services/request.api.service';
import { MenuController, AlertController, ActionSheetController, PickerController, PopoverController , NavController } from '@ionic/angular';
import { UserSetingsComponent } from '../user-setings/user-setings.component';
import { Logger } from 'src/app/common/logger/logger';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  userInfo: any;
  menuStatus = 0;
  isReload = true;
  menuTitle = '交互式电子技术手册';
  public appPages = [];
  windowPages = [
    {menuName: '首页', link: '/main/home', icon: 'home'},
    {menuName: '手册列表', link: '/main/product', icon: 'apps'},
    {menuName: '在线考试', link: '/main/exam', icon: 'book'},
    {menuName: '现场故障管理', link: '/main/list', icon: 'construct'},
    {menuName: '经验分享', link: '/main/list', icon: 'share'},
    {menuName: '预防性维修', link: '/main/list', icon: 'share'},
    {menuName: '备件识别', link: '/main/images', icon: 'aperture'},
    {menuName: '系统管理', link: '/main/system', icon: 'settings'},
  ];
  constructor(
    public router: Router,
    public sqliteDbCopy: SqliteDbCopy,
    public logger: Logger,
    public menuController: MenuController,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    public pickerController: PickerController,
    public popoverController: PopoverController,
    public sqliteService: SQLiteService,
    public toastServiceService: ToastServiceService,
    private navController: NavController
  ) { }

  ngOnInit() {
    if(sessionStorage.getItem('user') !== null) {
      this.userInfo = JSON.parse(sessionStorage.getItem('user'));
      this.sqliteService.executeSql(`${REQUESTSQL.queryMenuByRoleId}`, [this.userInfo.role_id]).then((data) => {
        let menuList = [];
        for (let i = 0; i < data.res.rows.length; i++) {
          menuList.push({
            menuId: data.res.rows.item(i).menu_id,
            menuName: data.res.rows.item(i).menu_name,
            icon: data.res.rows.item(i).icon,
            link: data.res.rows.item(i).link,
            level: data.res.rows.item(i).menu_code,
            sortNo: data.res.rows.item(i).sort_no,
            parentId: data.res.rows.item(i).parent_menu_id,
            status: data.res.rows.item(i).status
          });
          }
        this.appPages = menuList.filter(item => item.level === '1').sort(this.sortBy('sortNo'));
        this.logger.log(menuList.filter(item => item.level === '1'));
        sessionStorage.setItem('menuList', JSON.stringify(menuList));
        if (data.res.rows && data.res.rows.length >= 1) {
          this.navController.navigateRoot(['/main/home']);
        } else {
          this.toastServiceService.showToast('暂无权限查看该系统！', 'danger', 'top', 3000);
        }
      }).catch((err) => {
       // this.logger.error(err);
        // 移动端删除
       this.navController.navigateRoot(['/main/home'], {});
       this.appPages = this.windowPages;
      });
    } else {
      // this.router.navigate(['/login']);
      this.navController.navigateRoot(['/login'], {});
    }
  }

  /**
   * 根据字段排序
   * @param name 
   */
  sortBy(name) {
    return (o, p) => {
        let a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            console.log('error');
        }
    }
}

/**
 * 打开菜单
 */
  openMenu() {
    this.menuController.enable(true, 'appMenu');
    this.menuController.open('appMenu');
  }

  /**
   * 
   * @param event 点击菜单
   */
  activeMenu(event) {
    if (event.menuName === '首页') {
      this.menuTitle = '交互式电子技术手册';
    } else {
      this.menuTitle = event.menuName;
    }
  }

  /**
   * 点击用户图标
   */
  async settingBtn(ev: any) {
    const popover = await this.popoverController.create({
        component: UserSetingsComponent,
        event: ev,
        translucent: true
      });
    return  popover.present();
  }
  
  export() {
    this.sqliteDbCopy.copyDbToStorage('ietm.db', 0, '/sdcard/ietm_bak/', true).then((res) => {
      this.logger.log(res);
    });
  }
}
