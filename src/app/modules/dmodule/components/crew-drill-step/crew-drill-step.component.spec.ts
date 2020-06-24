import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrewDrillStepComponent } from './crew-drill-step.component';

describe('CrewDrillStepComponent', () => {
  let component: CrewDrillStepComponent;
  let fixture: ComponentFixture<CrewDrillStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewDrillStepComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrewDrillStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
