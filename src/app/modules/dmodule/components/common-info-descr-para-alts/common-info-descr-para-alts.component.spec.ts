import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommonInfoDescrParaAltsComponent } from './common-info-descr-para-alts.component';

describe('CommonInfoDescrParaAltsComponent', () => {
  let component: CommonInfoDescrParaAltsComponent;
  let fixture: ComponentFixture<CommonInfoDescrParaAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoDescrParaAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonInfoDescrParaAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
