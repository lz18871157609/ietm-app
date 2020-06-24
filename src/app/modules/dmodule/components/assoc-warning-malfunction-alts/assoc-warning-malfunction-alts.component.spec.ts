import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssocWarningMalfunctionAltsComponent } from './assoc-warning-malfunction-alts.component';

describe('AssocWarningMalfunctionAltsComponent', () => {
  let component: AssocWarningMalfunctionAltsComponent;
  let fixture: ComponentFixture<AssocWarningMalfunctionAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssocWarningMalfunctionAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssocWarningMalfunctionAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
