import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { AddManualsModalComponent } from '../modals/add-manuals-modal/add-manuals-modal';
@Component({
  selector: 'app-manuals-manage',
  templateUrl: './manuals-manage.component.html',
  styleUrls: ['./manuals-manage.component.scss'],
})
export class ManualsManageComponent implements OnInit {
  manualsList = [
    {id: '1', title: '作战系统', createTime: '2019-12-20 12:40'},
    {id: '2', title: '电力系统', createTime: '2019-12-20 12:40'},
    {id: '3', title: '船舶辅助系统', createTime: '2019-12-20 12:40'},
    {id: '4', title: '船舶装置系统', createTime: '2019-12-20 12:40'},
    {id: '5', title: '动力系统', createTime: '2019-12-20 12:40'},
    {id: '6', title: '自行车系统', createTime: '2019-12-20 12:40'},
    {id: '7', title: '直升机系统', createTime: '2019-12-20 12:40'},
    {id: '8', title: '作战系统', createTime: '2019-12-20 12:40'},
    {id: '9', title: '电力系统', createTime: '2019-12-20 12:40'},
    {id: '10', title: '作战系统', createTime: '2019-12-20 12:40'},
    {id: '11', title: '自行车系统', createTime: '2019-12-20 12:40'},
    {id: '12', title: '动力系统', createTime: '2019-12-20 12:40'},
    {id: '13', title: '直升机系统', createTime: '2019-12-20 12:40'},
    {id: '14', title: '船舶辅助系统', createTime: '2019-12-20 12:40'}
];
dataSet: any[] = [];
pageIndex = 1;
pageSize = 7;
  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }


  async addManual() {
    const modal = await this.modalController.create({
      component: AddManualsModalComponent,
    });
    return await modal.present();
  }
}
