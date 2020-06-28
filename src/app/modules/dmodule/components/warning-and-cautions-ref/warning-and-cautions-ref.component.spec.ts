import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarningAndCautionsRefComponent } from './warning-and-cautions-ref.component';

describe('WarningAndCautionsRefComponent', () => {
  let component: WarningAndCautionsRefComponent;
  let fixture: ComponentFixture<WarningAndCautionsRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningAndCautionsRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarningAndCautionsRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
