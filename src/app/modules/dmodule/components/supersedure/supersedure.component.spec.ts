import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupersedureComponent } from './supersedure.component';

describe('SupersedureComponent', () => {
  let component: SupersedureComponent;
  let fixture: ComponentFixture<SupersedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersedureComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupersedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
