import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarningAndCautionsComponent } from './warning-and-cautions.component';

describe('WarningAndCautionsComponent', () => {
  let component: WarningAndCautionsComponent;
  let fixture: ComponentFixture<WarningAndCautionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningAndCautionsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarningAndCautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
