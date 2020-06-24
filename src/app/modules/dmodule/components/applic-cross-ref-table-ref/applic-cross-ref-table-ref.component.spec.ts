import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplicCrossRefTableRefComponent } from './applic-cross-ref-table-ref.component';

describe('ApplicCrossRefTableRefComponent', () => {
  let component: ApplicCrossRefTableRefComponent;
  let fixture: ComponentFixture<ApplicCrossRefTableRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicCrossRefTableRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicCrossRefTableRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
