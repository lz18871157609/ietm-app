import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlIndicatorRefComponent } from './control-indicator-ref.component';

describe('ControlIndicatorRefComponent', () => {
  let component: ControlIndicatorRefComponent;
  let fixture: ComponentFixture<ControlIndicatorRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlIndicatorRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlIndicatorRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
