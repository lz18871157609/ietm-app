import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherPossibleCauseComponent } from './other-possible-cause.component';

describe('OtherPossibleCauseComponent', () => {
  let component: OtherPossibleCauseComponent;
  let fixture: ComponentFixture<OtherPossibleCauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPossibleCauseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherPossibleCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
