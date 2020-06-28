import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WiringPossibleCauseFromComponent } from './wiring-possible-cause-from.component';

describe('WiringPossibleCauseFromComponent', () => {
  let component: WiringPossibleCauseFromComponent;
  let fixture: ComponentFixture<WiringPossibleCauseFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiringPossibleCauseFromComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WiringPossibleCauseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
