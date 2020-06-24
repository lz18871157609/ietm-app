import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplicCrossRefTableComponent } from './applic-cross-ref-table.component';

describe('ApplicCrossRefTableComponent', () => {
  let component: ApplicCrossRefTableComponent;
  let fixture: ComponentFixture<ApplicCrossRefTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicCrossRefTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicCrossRefTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
