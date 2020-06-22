import { Component, OnInit } from '@angular/core';
import {UTILS} from '../../../utils/utils';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  aboutList = [
    {vNo: '2.2.0', vDate: '2020-06-20', bugFixes: [],
    features: [
      {title: '框架搭建、页面模型设计'},
      {title: 'Sqlite数据库导入、读取'},
      {title: '前端界面开发(登录、首页、菜单)、数据读取'},
      {title: 'DEMO页面开发制作'},
      {title: '弹窗、下拉选择、提示灯组件功能导入测试'},
      {title: '文件选择、移动、ZIP解压缩、删除等'},
      {title: '图片拍照、上传、裁剪、识别'},
    ]
  },
  {vNo: '2.2.1', vDate: '2020-06-22', bugFixes: [],
    features: [
      {title: '新增日志模板、用户登录日志写入'},
    ]
  },
  ]
  constructor() { }

  ngOnInit() {
    this.aboutList.sort(UTILS.sortBy('vDate'));
  }
}
