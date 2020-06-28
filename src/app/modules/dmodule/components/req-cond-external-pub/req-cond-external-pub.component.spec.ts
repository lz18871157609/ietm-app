import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReqCondExternalPubComponent } from './req-cond-external-pub.component';

describe('ReqCondExternalPubComponent', () => {
  let component: ReqCondExternalPubComponent;
  let fixture: ComponentFixture<ReqCondExternalPubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqCondExternalPubComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReqCondExternalPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
