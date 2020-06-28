import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarningMalfunctionAltsComponent } from './warning-malfunction-alts.component';

describe('WarningMalfunctionAltsComponent', () => {
  let component: WarningMalfunctionAltsComponent;
  let fixture: ComponentFixture<WarningMalfunctionAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningMalfunctionAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarningMalfunctionAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
