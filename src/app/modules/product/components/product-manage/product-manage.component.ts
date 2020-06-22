import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { Logger} from '../../../../common/logger/logger';
import { Router } from '@angular/router';
import { ToastServiceService} from '../../../../services/toast-service.service';
@Component({
  selector: 'app-product-manage',
  templateUrl: './product-manage.component.html',
  styleUrls: ['./product-manage.component.scss'],
})
export class ProductManageComponent implements OnInit {
  private selectedItem: any;
  activeManual = {manualTitle : '手册列表', manualMenuCode: 0, manualId: '0', parentId: '0'};
  isParent = false;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  private list = [{code: 1, manualId: '1', manualName: '船舶装置', icon: 'flask', parentId: '0', sort: 1, children: [
    {code: 2, manualId: '2', manualName: '船舶手册', parentId: '1', icon: 'wifi', sort: 1, children: [
      {code: 3, manualId: '3', manualName: '船舶手册2', parentId: '2', icon: 'beer', sort: 2, children: [
        {code: 4, manualId: '5', manualName: '船舶手册3', parentId: '3', icon: 'beer', sort: 1, children: []}
      ]},
    ]},
    {code: 2, manualId: '6', manualName: '电力系统', parentId: '1', icon: 'wifi', sort: 2, children:[]}
  ]},
  {code: 1, manualId: '4', manualName: '动力系统', parentId: '0', icon: 'football', sort: 1, children: []},
];
private list2 = [];
private list3 = [];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private logger: Logger,
    private toast: Toast,
    private router: Router,
    private toastServiceService: ToastServiceService
  ) {}

  ngOnInit() {
    let data2  = [];
    this.list3 = this.convertToGridData(data2, this.list);
    this.list3.forEach(item => {
      if (item.code === 1) {
        this.list2 = [...this.list2, item];
      }
    });
  }

  convertToGridData(list, data) {
    if (!(Array.isArray(data) && data.length > 0)) {
return ;
    }
    data.forEach(father => {
      father.children.forEach(element => {
        element.parentId = father.manualId;
      });
      list.push(father);
      if (father.children.length > 0) {
        this.convertToGridData(list, father.children);
      }
    });
    return list;
  }
  
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  toInfo(data) {
    if (data.children && data.children.length > 0) {
    this.activeManual.manualMenuCode = data.code;
    this.activeManual.manualTitle = data.manualName;
    this.activeManual.manualId = data.manualId;
    this.activeManual.parentId = data.parentId;
    this.list2 = [];
    this.list3.forEach(item => {
      if (item.parentId === data.manualId) {
        this.list2 = [...this.list2, item];
      }
    });
    this.isParent = true;
  } else {
    this.toastServiceService.showToast('没有手册了！', 'warning', 'top', 2000);
  }
  }

  /**
   * 返回上一层级
   */
  goHistory() {
    let manualInfo = this.list3.filter(item => item.manualId === this.activeManual.parentId);
    this.list2 = [];
    if (manualInfo.length <= 0) {
      this.isParent  = false;
      this.activeManual = {manualTitle : '手册列表', manualMenuCode: 0, manualId: '0', parentId: '0'};
      this.list2 = this.list3.filter(item => item.code === 1);
    } else {
    this.activeManual.manualMenuCode = manualInfo[0].code;
    this.activeManual.manualTitle = manualInfo[0].manualName;
    this.activeManual.manualId = manualInfo[0].manualId;
    this.activeManual.parentId = manualInfo[0].parentId;
    this.list2 = manualInfo[0].children;
  }
  }

  toProductInfo(item) {
    this.router.navigate(['/main/product/product-info/preface']);
  }
}
