import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss'],
})
export class AuthorizeComponent implements OnInit {
  menuList: any;
  constructor() { }

  ngOnInit() {
    this.menuList = this.convertToTreeData(JSON.parse(sessionStorage.getItem('menuList')), 0);
    console.log(this.menuList);
  }

  /**
   * 选择菜单
   */
  chioseMenu(item) {
    if (item.isChecked === false) {
      item.isChecked = true;
    } else {
      item.isChecked = false;
    }
  }

  /**
   * 数组列表转 树
   */
  convertToTreeData(data, pid) {
    const result = [];
    let temp = [];
    data.forEach((element, index) => {
      if (element.parentId === pid) {
        const obj = {
          menuId: element.menuId,
          menuName: element.menuName,
          icon: element.icon,
          link: element.link,
          level: element.level,
          sortNo: element.sortNo,
          status: element.status,
          parentId: element.parentId,
          isChecked: false,
          children: null
        }
        temp = this.convertToTreeData(data, element.menuId);
        if (temp.length > 0) {
          obj.children = temp;
        }
        result.push(obj);
      }
    });
    return result;
  }
}
