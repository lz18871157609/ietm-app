import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaultIsolationRefComponent } from './fault-isolation-ref.component';

describe('FaultIsolationRefComponent', () => {
  let component: FaultIsolationRefComponent;
  let fixture: ComponentFixture<FaultIsolationRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultIsolationRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaultIsolationRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
