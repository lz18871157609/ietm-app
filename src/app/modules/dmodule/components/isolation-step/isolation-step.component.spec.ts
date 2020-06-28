import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsolationStepComponent } from './isolation-step.component';

describe('IsolationStepComponent', () => {
  let component: IsolationStepComponent;
  let fixture: ComponentFixture<IsolationStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsolationStepComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsolationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
