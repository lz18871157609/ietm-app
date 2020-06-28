import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarningAndCautionParaComponent } from './warning-and-caution-para.component';

describe('WarningAndCautionParaComponent', () => {
  let component: WarningAndCautionParaComponent;
  let fixture: ComponentFixture<WarningAndCautionParaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningAndCautionParaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarningAndCautionParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
