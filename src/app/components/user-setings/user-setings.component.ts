import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController, ActionSheetController, PickerController, PopoverController , NavController } from '@ionic/angular';
import { Logger } from 'src/app/common/logger/logger';
@Component({
  selector: 'app-user-setings',
  templateUrl: './user-setings.component.html',
  styleUrls: ['./user-setings.component.scss'],
})
export class UserSetingsComponent implements OnInit {

  constructor(
    private router: Router,
    private popoverController: PopoverController,
    private logger: Logger,
    private navController: NavController
  ) { }

  ngOnInit() {}

  /**
   * 退出登录
   */
  loginOut() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('menuList');
    this.router.navigate(['/login']);
    this.popoverController.dismiss().then(pop => {
      this.logger.log(pop);
    })
  }

  about() {
    this.navController.navigateRoot(['/main/about']);
    this.popoverController.dismiss().then(pop => {
      this.logger.log(pop);
    })
  }
}
