import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsolateDetectedFaultComponent } from './isolate-detected-fault.component';

describe('IsolateDetectedFaultComponent', () => {
  let component: IsolateDetectedFaultComponent;
  let fixture: ComponentFixture<IsolateDetectedFaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsolateDetectedFaultComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsolateDetectedFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
