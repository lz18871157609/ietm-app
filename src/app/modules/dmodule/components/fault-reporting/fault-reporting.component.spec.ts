import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaultReportingComponent } from './fault-reporting.component';

describe('FaultReportingComponent', () => {
  let component: FaultReportingComponent;
  let fixture: ComponentFixture<FaultReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultReportingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaultReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
