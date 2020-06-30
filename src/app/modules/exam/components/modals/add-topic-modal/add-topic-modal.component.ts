import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import * as wangEditor from 'wangeditor';
import { Logger } from '../../../../../common/logger/logger';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TopicAnswerModalComponent } from '../topic-answer-modal/topic-answer-modal.component';
@Component({
  selector: 'app-add-topic-modal',
  templateUrl: './add-topic-modal.component.html',
  styleUrls: ['./add-topic-modal.component.scss'],
})
export class AddTopicModalComponent implements OnInit {
  editor: any;
  constructor(
    private el: ElementRef,
    private renderer: Renderer,
    private logger: Logger,
    private modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    this.logger.log('开始绘制弹窗类容');
    let editordom = this.el.nativeElement.querySelector('#div1');
    this.editor = new wangEditor(editordom);
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.create();
    this.editor.$textContainerElem.css('height', '8vw');
    this.logger.log(this.editor);
  }

  dismissTopicModal() {
    this.modalController.dismiss({dismissed: true});
  }
  getHtml() {
   this.logger.log(this.editor.txt.html());
  }
  back() {
  history.back();
  }

  async addAnswer() {
    let modal = await this.modalController.create({
      component: TopicAnswerModalComponent,
      cssClass: 'add-topic-answer'
    });
    modal.present();
    this.logger.log(modal);
    const { data } = await modal.onDidDismiss();
    if (data.dismiss === 'undefined' || data.dismiss === true) {

    }
  }
}
