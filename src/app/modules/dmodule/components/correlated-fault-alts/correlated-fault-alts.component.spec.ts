import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorrelatedFaultAltsComponent } from './correlated-fault-alts.component';

describe('CorrelatedFaultAltsComponent', () => {
  let component: CorrelatedFaultAltsComponent;
  let fixture: ComponentFixture<CorrelatedFaultAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrelatedFaultAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorrelatedFaultAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
