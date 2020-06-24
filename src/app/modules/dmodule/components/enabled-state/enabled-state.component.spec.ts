import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnabledStateComponent } from './enabled-state.component';

describe('EnabledStateComponent', () => {
  let component: EnabledStateComponent;
  let fixture: ComponentFixture<EnabledStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnabledStateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnabledStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
