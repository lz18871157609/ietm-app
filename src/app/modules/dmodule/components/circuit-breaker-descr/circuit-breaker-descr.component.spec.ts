import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircuitBreakerDescrComponent } from './circuit-breaker-descr.component';

describe('CircuitBreakerDescrComponent', () => {
  let component: CircuitBreakerDescrComponent;
  let fixture: ComponentFixture<CircuitBreakerDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitBreakerDescrComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CircuitBreakerDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
