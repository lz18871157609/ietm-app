import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExportRegistrationStmtComponent } from './export-registration-stmt.component';

describe('ExportRegistrationStmtComponent', () => {
  let component: ExportRegistrationStmtComponent;
  let fixture: ComponentFixture<ExportRegistrationStmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportRegistrationStmtComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExportRegistrationStmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
