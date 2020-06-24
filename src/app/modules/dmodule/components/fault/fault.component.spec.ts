import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaultComponent } from './fault.component';

describe('FaultComponent', () => {
  let component: FaultComponent;
  let fixture: ComponentFixture<FaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
