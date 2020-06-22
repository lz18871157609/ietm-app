import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam-manage',
  templateUrl: './exam-manage.component.html',
  styleUrls: ['./exam-manage.component.scss'],
})
export class ExamManageComponent implements OnInit {
  segment = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit() {
    if (this.router.url === '/main/exam/exam-manage') {
      this.segment = 'to-exam';
      this.router.navigate(['/main/exam/exam-manage/to-exam']);
    } else {
      this.segment = this.router.url.split('/').pop();
      this.router.navigate([this.router.url]);
    }
  }

  segmentChanged(event) {
    console.log(event);
    this.router.navigate(['/main/exam/exam-manage/' + event.detail.value]);
  }

}
