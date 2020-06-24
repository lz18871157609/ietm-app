import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FromEquipComponent } from './from-equip.component';

describe('FromEquipComponent', () => {
  let component: FromEquipComponent;
  let fixture: ComponentFixture<FromEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromEquipComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FromEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
