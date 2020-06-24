import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmbeddedSupportEquipDescrComponent } from './embedded-support-equip-descr.component';

describe('EmbeddedSupportEquipDescrComponent', () => {
  let component: EmbeddedSupportEquipDescrComponent;
  let fixture: ComponentFixture<EmbeddedSupportEquipDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbeddedSupportEquipDescrComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmbeddedSupportEquipDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
