import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResponsiblePartnerCompanyComponent } from './responsible-partner-company.component';

describe('ResponsiblePartnerCompanyComponent', () => {
  let component: ResponsiblePartnerCompanyComponent;
  let fixture: ComponentFixture<ResponsiblePartnerCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiblePartnerCompanyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResponsiblePartnerCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
