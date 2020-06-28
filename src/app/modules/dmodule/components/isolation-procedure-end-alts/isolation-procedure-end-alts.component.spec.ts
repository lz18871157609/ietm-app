import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsolationProcedureEndAltsComponent } from './isolation-procedure-end-alts.component';

describe('IsolationProcedureEndAltsComponent', () => {
  let component: IsolationProcedureEndAltsComponent;
  let fixture: ComponentFixture<IsolationProcedureEndAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsolationProcedureEndAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsolationProcedureEndAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
