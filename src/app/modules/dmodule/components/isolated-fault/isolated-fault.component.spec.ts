import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsolatedFaultComponent } from './isolated-fault.component';

describe('IsolatedFaultComponent', () => {
  let component: IsolatedFaultComponent;
  let fixture: ComponentFixture<IsolatedFaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsolatedFaultComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsolatedFaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
