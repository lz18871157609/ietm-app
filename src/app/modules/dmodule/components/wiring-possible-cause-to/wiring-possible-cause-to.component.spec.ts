import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WiringPossibleCauseToComponent } from './wiring-possible-cause-to.component';

describe('WiringPossibleCauseToComponent', () => {
  let component: WiringPossibleCauseToComponent;
  let fixture: ComponentFixture<WiringPossibleCauseToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiringPossibleCauseToComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WiringPossibleCauseToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
