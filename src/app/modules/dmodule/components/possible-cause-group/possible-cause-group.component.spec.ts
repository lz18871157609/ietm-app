import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PossibleCauseGroupComponent } from './possible-cause-group.component';

describe('PossibleCauseGroupComponent', () => {
  let component: PossibleCauseGroupComponent;
  let fixture: ComponentFixture<PossibleCauseGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibleCauseGroupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PossibleCauseGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
