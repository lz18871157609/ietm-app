import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObservedFaultComponent } from './observed-fault.component';

describe('ObservedFaultComponent', () => {
  let component: ObservedFaultComponent;
  let fixture: ComponentFixture<ObservedFaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservedFaultComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObservedFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
