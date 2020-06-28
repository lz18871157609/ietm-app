import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitialProvisioningProjectComponent } from './initial-provisioning-project.component';

describe('InitialProvisioningProjectComponent', () => {
  let component: InitialProvisioningProjectComponent;
  let fixture: ComponentFixture<InitialProvisioningProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialProvisioningProjectComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitialProvisioningProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
