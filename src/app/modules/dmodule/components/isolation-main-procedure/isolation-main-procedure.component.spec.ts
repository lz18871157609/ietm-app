import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsolationMainProcedureComponent } from './isolation-main-procedure.component';

describe('IsolationMainProcedureComponent', () => {
  let component: IsolationMainProcedureComponent;
  let fixture: ComponentFixture<IsolationMainProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsolationMainProcedureComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsolationMainProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
