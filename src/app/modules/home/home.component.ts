import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertController, ActionSheetController, PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { Toast } from '@ionic-native/toast/ngx';
import { Logger } from '../../common/logger/logger';
import { ToastServiceService} from '../../services/toast-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent  implements OnInit {
  historyInfo: [];
  userInfo: any;
  menuList = [
    {text: '技术手册', value: 1},
    {text: '题库管理', value: 2},
    {text: '用户管理', value: 3},
    {text: '角色管理', value: 4},
    {text: '试卷管理', value: 5},
  ];
  quickMenuList = [
    /* {id: 1, menuName: '技术手册', icon: 'apps'},
    {id: 2, menuName: '题库管理', icon: 'apps'},
    {id: 3, menuName: '用户管理', icon: 'apps'},
    {id: 4, menuName: '角色管理', icon: 'apps'},
    {id: 5, menuName: '试卷管理', icon: 'apps'}, */
  ];
  constructor(
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private pickerController: PickerController,
    private toast: Toast,
    private logger: Logger,
    private toastServiceService: ToastServiceService,
    private ref: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.userInfo = JSON.parse(sessionStorage.getItem('user'));
  }

  /**
   * 展示快捷菜单选项
   */
  async addQuickMenu() {
    const opts: PickerOptions = {
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        },
        {
          text: '确认',
          handler: (value) => {
            this.addMenu(value['menuList'].value, value['menuList'].text);
          }
        }
      ],
      columns: [
        {
          name: 'menuList',
          options: this.menuList
        }
      ]
    }
    const picker = await this.pickerController.create(opts);
    picker.present();
  }

  /**
   * 添加快捷菜单
   * @param id
   * @param name
   */
addMenu(id, name) {
this.quickMenuList = [...this.quickMenuList, {id: id, menuName: name, icon: 'apps'}];
this.ref.markForCheck();
this.ref.detectChanges();
}
/**
 * 删除快捷菜单
 * @param menu
 */
  closeQuickMenu(menu) {
    this.quickMenuList = this.quickMenuList.filter(item => item.id !== menu.id);
    this.ref.markForCheck();
    this.ref.detectChanges();
  }
}
