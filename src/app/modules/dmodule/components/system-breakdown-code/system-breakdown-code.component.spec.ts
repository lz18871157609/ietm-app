import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SystemBreakdownCodeComponent } from './system-breakdown-code.component';

describe('SystemBreakdownCodeComponent', () => {
  let component: SystemBreakdownCodeComponent;
  let fixture: ComponentFixture<SystemBreakdownCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemBreakdownCodeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SystemBreakdownCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
