import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamManageComponent } from './exam-manage.component';

describe('ExamManageComponent', () => {
  let component: ExamManageComponent;
  let fixture: ComponentFixture<ExamManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamManageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
