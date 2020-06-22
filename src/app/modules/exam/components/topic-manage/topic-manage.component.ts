import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController, NavController } from '@ionic/angular';
import { Logger } from 'src/app/common/logger/logger';
import { AddTopicModalComponent } from '../modals/add-topic-modal/add-topic-modal.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topic-manage',
  templateUrl: './topic-manage.component.html',
  styleUrls: ['./topic-manage.component.scss'],
})
export class TopicManageComponent implements OnInit {

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController,
    private navController: NavController,
    private logger: Logger,
    private router: Router
  ) { }

  ngOnInit() { }

/*   async addTopicModal() {
    this.toastController.create({
      message: '您输入的用户名或密码错误，请重新输入！',
      position: 'top',
      color: 'danger',
      duration: 3000     
    }).then(toast => {
      toast.present();
    });

    this.logger.info('打开编辑器弹窗');
    let modal = await this.modalController.create({
      component: AddTopicModalComponent,
      cssClass: 'add-topic'
    });
    modal.present();
    this.logger.log(modal);
    const { data } = await modal.onDidDismiss();
    if (data.dismiss === 'undefined' || data.dismiss === true) {

    }
  } */
  addTopicModal() {
    //this.router.navigate(['/main/exam/exam-manage/add-topic-modal']);
    this.navController.navigateForward(['/main/exam/exam-manage/add-topic-modal'], {});
  }
}
