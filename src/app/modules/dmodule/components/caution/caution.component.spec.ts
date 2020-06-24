import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CautionComponent } from './caution.component';

describe('CautionComponent', () => {
  let component: CautionComponent;
  let fixture: ComponentFixture<CautionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CautionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
