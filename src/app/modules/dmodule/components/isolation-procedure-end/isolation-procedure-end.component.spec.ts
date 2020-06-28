import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsolationProcedureEndComponent } from './isolation-procedure-end.component';

describe('IsolationProcedureEndComponent', () => {
  let component: IsolationProcedureEndComponent;
  let fixture: ComponentFixture<IsolationProcedureEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsolationProcedureEndComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsolationProcedureEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
