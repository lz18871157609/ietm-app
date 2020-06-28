import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WiringPossibleCauseComponent } from './wiring-possible-cause.component';

describe('WiringPossibleCauseComponent', () => {
  let component: WiringPossibleCauseComponent;
  let fixture: ComponentFixture<WiringPossibleCauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiringPossibleCauseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WiringPossibleCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
