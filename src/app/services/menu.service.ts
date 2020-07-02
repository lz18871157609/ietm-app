import { Injectable } from '@angular/core';
import { AlertController, ActionSheetController, ToastController } from '@ionic/angular';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
    private subject = new Subject<any>();
  constructor(
  ) { }

  /**
   * 发送点击菜单信息
   */
 sendMenuInfo(value: any) {
     if (value) {
         this.subject.next(value);
     }
 }

 /**
  * 接收菜单信息
  */
 getMenuInfo(): Observable<any> {
return this.subject.asObservable();
 }
}
