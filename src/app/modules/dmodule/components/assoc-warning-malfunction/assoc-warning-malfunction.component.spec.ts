import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssocWarningMalfunctionComponent } from './assoc-warning-malfunction.component';

describe('AssocWarningMalfunctionComponent', () => {
  let component: AssocWarningMalfunctionComponent;
  let fixture: ComponentFixture<AssocWarningMalfunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssocWarningMalfunctionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssocWarningMalfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
