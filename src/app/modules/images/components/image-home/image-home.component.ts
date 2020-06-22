import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-home',
  templateUrl: './image-home.component.html',
  styleUrls: ['./image-home.component.scss'],
})
export class ImageHomeComponent implements OnInit {
  segment = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.segment = 'distinguish';
    this.router.navigate(['/main/images/image-home/distinguish']);
  }
  segmentChanged(event) {
    this.router.navigate(['/main/images/image-home/' + event.detail.value]);
  }
}
