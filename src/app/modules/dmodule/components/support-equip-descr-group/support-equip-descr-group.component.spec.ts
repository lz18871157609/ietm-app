import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupportEquipDescrGroupComponent } from './support-equip-descr-group.component';

describe('SupportEquipDescrGroupComponent', () => {
  let component: SupportEquipDescrGroupComponent;
  let fixture: ComponentFixture<SupportEquipDescrGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportEquipDescrGroupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupportEquipDescrGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
