import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SystemLocationComponent } from './system-location.component';

describe('SystemLocationComponent', () => {
  let component: SystemLocationComponent;
  let fixture: ComponentFixture<SystemLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLocationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SystemLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
