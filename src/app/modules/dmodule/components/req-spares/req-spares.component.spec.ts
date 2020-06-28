import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReqSparesComponent } from './req-spares.component';

describe('ReqSparesComponent', () => {
  let component: ReqSparesComponent;
  let fixture: ComponentFixture<ReqSparesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqSparesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReqSparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
