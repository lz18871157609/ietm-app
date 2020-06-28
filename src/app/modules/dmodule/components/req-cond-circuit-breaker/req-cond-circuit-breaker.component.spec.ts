import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReqCondCircuitBreakerComponent } from './req-cond-circuit-breaker.component';

describe('ReqCondCircuitBreakerComponent', () => {
  let component: ReqCondCircuitBreakerComponent;
  let fixture: ComponentFixture<ReqCondCircuitBreakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqCondCircuitBreakerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReqCondCircuitBreakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
