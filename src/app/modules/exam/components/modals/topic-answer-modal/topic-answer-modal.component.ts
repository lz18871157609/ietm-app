import { Component, OnInit, ElementRef } from '@angular/core';
import * as wangEditor from 'wangeditor';
import { Logger } from 'src/app/common/logger/logger';
@Component({
  selector: 'app-topic-answer-modal',
  templateUrl: './topic-answer-modal.component.html',
  styleUrls: ['./topic-answer-modal.component.scss'],
})
export class TopicAnswerModalComponent implements OnInit {
  editor: any;
  constructor(
    private logger: Logger,
    private el: ElementRef,
  ) { }

  ngOnInit() {
    this.logger.log('开始绘制弹窗类容');
    let editordom = this.el.nativeElement.querySelector('#answerEdit');
    this.editor = new wangEditor(editordom);
    this.editor.customConfig.menus = [
      'head',  // 标题
    'bold',  // 粗体
    'fontSize',  // 字号
    'fontName',  // 字体
    'italic',  // 斜体
    'underline',  // 下划线
    'strikeThrough',  // 删除线
    'foreColor',  // 文字颜色
    'backColor',  // 背景颜色
    'link',  // 插入链接
    'list',  // 列表
    'justify',  // 对齐方式
    'quote',  // 引用
    'code',  // 插入代码
    'undo',  // 撤销
    'redo'  // 重复
  ]
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.create();
    this.logger.log(this.editor);
  }

}
