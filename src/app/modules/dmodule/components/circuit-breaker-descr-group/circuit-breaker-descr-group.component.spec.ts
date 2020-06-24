import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircuitBreakerDescrGroupComponent } from './circuit-breaker-descr-group.component';

describe('CircuitBreakerDescrGroupComponent', () => {
  let component: CircuitBreakerDescrGroupComponent;
  let fixture: ComponentFixture<CircuitBreakerDescrGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitBreakerDescrGroupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CircuitBreakerDescrGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
