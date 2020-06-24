import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaultEquipComponent } from './fault-equip.component';

describe('FaultEquipComponent', () => {
  let component: FaultEquipComponent;
  let fixture: ComponentFixture<FaultEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultEquipComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaultEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
