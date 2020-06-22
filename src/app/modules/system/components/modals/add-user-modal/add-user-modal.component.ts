import { Component, OnInit } from '@angular/core';
import { SQLiteService} from '../../../../../services/sqlite-service.service';
import { Logger} from '../../../../../common/logger/logger';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormControl, FormBuilder, FormGroupName} from '@angular/forms';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModalComponent implements OnInit {
  addUserForm: FormGroup;
  username: '';
  userpwd: '';

  constructor(
    private sqliteService: SQLiteService,
    private logger: Logger,
    private fb: FormBuilder,
    private toastController: ToastController,
    private modalController: ModalController,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.addUserForm = this.fb.group({
      username: [null, [Validators.required, Validators.maxLength(20)]],
      userpwd: [null, [Validators.required, Validators.maxLength(20)]],
    });
  }

  addUser(data) {
    let date = new Date();
    let sql = 'insert into sys_user values(?,?,?,?,?,?,?,?,?,?,?,?)';
    let params = [null, data.username, data.userpwd, data.username, '18911111111', data.username, '测试', date, 1, date, 1, 1];
    this.sqliteService.executeSql(sql, params).then((data) => {
      this.modalController.dismiss({dismiss: true});
      // this.router.navigate([this.router.url]);
      // location.reload();
      this.toastController.create({
        message: '用户数据插入成功！',
        position: 'top',
        color: 'success',
        duration: 1000
      }).then(toast => {
        toast.present();
      });
    }).catch((err) => {
      this.toastController.create({
        message: '用户数据插入失败！',
        position: 'top',
        color: 'danger',
        duration: 3000
      }).then(toast => {
        toast.present();
      });
    });
  }
  dismissUserModal() {
    this.modalController.dismiss({dismissed: true});
  }
}
