import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaultContextComponent } from './fault-context.component';

describe('FaultContextComponent', () => {
  let component: FaultContextComponent;
  let fixture: ComponentFixture<FaultContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultContextComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaultContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
