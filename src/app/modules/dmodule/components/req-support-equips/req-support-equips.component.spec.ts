import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReqSupportEquipsComponent } from './req-support-equips.component';

describe('ReqSupportEquipsComponent', () => {
  let component: ReqSupportEquipsComponent;
  let fixture: ComponentFixture<ReqSupportEquipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqSupportEquipsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReqSupportEquipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
