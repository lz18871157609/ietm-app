import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaultMessageIndicationComponent } from './fault-message-indication.component';

describe('FaultMessageIndicationComponent', () => {
  let component: FaultMessageIndicationComponent;
  let fixture: ComponentFixture<FaultMessageIndicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultMessageIndicationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaultMessageIndicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
