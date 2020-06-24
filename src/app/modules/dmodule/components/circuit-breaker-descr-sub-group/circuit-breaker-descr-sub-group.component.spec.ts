import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircuitBreakerDescrSubGroupComponent } from './circuit-breaker-descr-sub-group.component';

describe('CircuitBreakerDescrSubGroupComponent', () => {
  let component: CircuitBreakerDescrSubGroupComponent;
  let fixture: ComponentFixture<CircuitBreakerDescrSubGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitBreakerDescrSubGroupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CircuitBreakerDescrSubGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
