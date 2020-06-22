import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogManageComponent } from './log-manage.component';

describe('LogManageComponent', () => {
  let component: LogManageComponent;
  let fixture: ComponentFixture<LogManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogManageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
