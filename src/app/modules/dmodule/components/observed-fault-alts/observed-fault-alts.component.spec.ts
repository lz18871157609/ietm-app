import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObservedFaultAltsComponent } from './observed-fault-alts.component';

describe('ObservedFaultAltsComponent', () => {
  let component: ObservedFaultAltsComponent;
  let fixture: ComponentFixture<ObservedFaultAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservedFaultAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObservedFaultAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
