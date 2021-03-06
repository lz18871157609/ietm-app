import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { MenuService } from '../../../../services/menu.service';
import { UTILS } from '../../../../../utils/utils';
@Component({
  selector: 'app-system-manage',
  templateUrl: './system-manage.component.html',
  styleUrls: ['./system-manage.component.scss'],
  providers: [NavParams]
})
export class SystemManageComponent implements OnInit {
  segment = '';
  menuList: any;
  systemMenuList = [
    {menuName: '手册管理', link: '/main/system/system-manage/manuals-manage', remark: 'manuals-manage'},
    {menuName: '用户管理', link: '/main/system/system-manage/user-manage', remark: 'user-manage'},
    {menuName: '角色管理', link: '/main/system/system-manage/role-manage', remark: 'role-manage'},
    {menuName: '数据更新', link: '/main/system/system-manage/data-down', remark: 'data-down'},
    {menuName: '数据上传', link: '/main/system/system-manage/data-up', remark: 'data-up'},
    {menuName: '用户日志', link: '/main/system/system-manage/log-manage', remark: 'log-manage'},
    {menuName: '意见反馈', link: '/main/system/system-manage/feed-back', remark: 'feed-back'},
  ];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menuService: MenuService
  ) { }

  ngOnInit() {
   // this.menuService.getMenuInfo().subscribe(menu => {
    //  this.menuList = JSON.parse(sessionStorage.getItem('menuList')).filter(item => item.parentId === menu.menuId).sort(UTILS.sortByDesc('sortNo'));
      if (this.router.url === '/main/system/system-manage') {
        this.segment = 'manuals-manage';
        this.router.navigate(['/main/system/system-manage/manuals-manage']);
      } else {
        this.segment = this.router.url.split('/').pop();
        this.router.navigate([this.router.url]);
      }
   // })
  }

  /**
   * 切换菜单 跳转路由
   * @param event 
   */
  segmentChanged(event) {
    console.log(event);
    this.router.navigate(['/main/system/system-manage/' + event.detail.value]);
  }
}
