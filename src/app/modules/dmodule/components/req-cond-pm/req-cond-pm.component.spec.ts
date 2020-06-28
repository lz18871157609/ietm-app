import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReqCondPmComponent } from './req-cond-pm.component';

describe('ReqCondPmComponent', () => {
  let component: ReqCondPmComponent;
  let fixture: ComponentFixture<ReqCondPmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqCondPmComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReqCondPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
