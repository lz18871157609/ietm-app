import { Injectable } from '@angular/core';
import { AlertController, ActionSheetController, ToastController } from '@ionic/angular';
import { Subject, Observable } from 'rxjs';
import { EventEmitter } from 'eventemitter3';
@Injectable({
  providedIn: 'root'
})
export class EventService {
    public event: any;
  constructor(
  ) {
    this.event = new EventEmitter();   //这个实例就会被多个组件共享  来实现不同页面的数据通信
   }
}
