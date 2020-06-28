import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuperScriptComponent } from './super-script.component';

describe('SuperScriptComponent', () => {
  let component: SuperScriptComponent;
  let fixture: ComponentFixture<SuperScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperScriptComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
