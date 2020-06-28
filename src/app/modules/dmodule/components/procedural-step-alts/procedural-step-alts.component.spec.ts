import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProceduralStepAltsComponent } from './procedural-step-alts.component';

describe('ProceduralStepAltsComponent', () => {
  let component: ProceduralStepAltsComponent;
  let fixture: ComponentFixture<ProceduralStepAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceduralStepAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProceduralStepAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
