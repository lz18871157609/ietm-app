import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CautionRefComponent } from './caution-ref.component';

describe('CautionRefComponent', () => {
  let component: CautionRefComponent;
  let fixture: ComponentFixture<CautionRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CautionRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CautionRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
