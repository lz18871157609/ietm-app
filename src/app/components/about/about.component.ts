import { Component, OnInit } from '@angular/core';
import {UTILS} from '../../../utils/utils';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  aboutList = [
    {vNo: '0.1.0', vDate: '2020-06-20', bugFixes: [],
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
  {vNo: '0.1.1', vDate: '2020-06-22', bugFixes: [],
    features: [
      {title: '新增日志模板、用户登录日志写入'},
    ]
  },
  {vNo: '0.1.2', vDate: '2020-06-30', bugFixes: [],
    features: [
      {title: '新增DM组件(A-Z)'},
      {title: '手册XML解析DEMO展示'},
      {title: 'Unity3d DEMO展示'},
    ]
  },
  {vNo: '0.1.3', vDate: '2020-07-04', bugFixes: [],
    features: [
      {title: '解析PMC技术手册菜单'},
      {title: '解析DMC数据展示'},
      {title: '菜单功能优化'},
      {title: '手册打印功能测试'},
    ]
  },
  ]
  constructor() { }

  ngOnInit() {
    this.aboutList.sort(UTILS.sortBy('vDate'));
  }
}
