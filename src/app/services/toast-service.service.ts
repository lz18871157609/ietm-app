import { Injectable } from '@angular/core';
import { AlertController, ActionSheetController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor(
    public toastController: ToastController
  ) { }

  /**
   * toast提示公共方法
   * @param msg 消息体
   * @param colors 颜色
   * @param postion 坐标
   * @param time 时间
   */
  async showToast(msg, colors, postion, time) {
    const toast = await this.toastController.create({
      message: msg,
      color: colors,
      position: postion,
      duration: time
    });
    return await toast.present();
}
}
