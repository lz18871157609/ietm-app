import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplicabilitySegmentComponent } from './applicability-segment.component';

describe('ApplicabilitySegmentComponent', () => {
  let component: ApplicabilitySegmentComponent;
  let fixture: ComponentFixture<ApplicabilitySegmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicabilitySegmentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicabilitySegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
