import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupportEquipDescrComponent } from './support-equip-descr.component';

describe('SupportEquipDescrComponent', () => {
  let component: SupportEquipDescrComponent;
  let fixture: ComponentFixture<SupportEquipDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportEquipDescrComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupportEquipDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
