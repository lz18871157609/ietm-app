import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoreqSupportEquipsComponent } from './noreq-support-equips.component';

describe('NoreqSupportEquipsComponent', () => {
  let component: NoreqSupportEquipsComponent;
  let fixture: ComponentFixture<NoreqSupportEquipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoreqSupportEquipsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoreqSupportEquipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
