import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReqTechInfoGroupComponent } from './req-tech-info-group.component';

describe('ReqTechInfoGroupComponent', () => {
  let component: ReqTechInfoGroupComponent;
  let fixture: ComponentFixture<ReqTechInfoGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqTechInfoGroupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReqTechInfoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
