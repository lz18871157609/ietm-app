import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommonInfoDescrParaComponent } from './common-info-descr-para.component';

describe('CommonInfoDescrParaComponent', () => {
  let component: CommonInfoDescrParaComponent;
  let fixture: ComponentFixture<CommonInfoDescrParaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoDescrParaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommonInfoDescrParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
