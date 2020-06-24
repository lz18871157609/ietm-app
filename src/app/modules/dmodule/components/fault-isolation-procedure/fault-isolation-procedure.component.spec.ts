import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaultIsolationProcedureComponent } from './fault-isolation-procedure.component';

describe('FaultIsolationProcedureComponent', () => {
  let component: FaultIsolationProcedureComponent;
  let fixture: ComponentFixture<FaultIsolationProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultIsolationProcedureComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaultIsolationProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
