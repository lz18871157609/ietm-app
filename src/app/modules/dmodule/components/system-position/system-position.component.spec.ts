import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SystemPositionComponent } from './system-position.component';

describe('SystemPositionComponent', () => {
  let component: SystemPositionComponent;
  let fixture: ComponentFixture<SystemPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemPositionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SystemPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
