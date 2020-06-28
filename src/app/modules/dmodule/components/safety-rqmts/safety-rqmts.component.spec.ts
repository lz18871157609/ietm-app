import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SafetyRqmtsComponent } from './safety-rqmts.component';

describe('SafetyRqmtsComponent', () => {
  let component: SafetyRqmtsComponent;
  let fixture: ComponentFixture<SafetyRqmtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyRqmtsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SafetyRqmtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
