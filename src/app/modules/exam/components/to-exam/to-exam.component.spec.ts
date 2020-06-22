import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToExamComponent } from './to-exam.component';

describe('ToExamComponent', () => {
  let component: ToExamComponent;
  let fixture: ComponentFixture<ToExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToExamComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
