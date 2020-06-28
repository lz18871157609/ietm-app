import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SystemNameComponent } from './system-name.component';

describe('SystemNameComponent', () => {
  let component: SystemNameComponent;
  let fixture: ComponentFixture<SystemNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemNameComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SystemNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
