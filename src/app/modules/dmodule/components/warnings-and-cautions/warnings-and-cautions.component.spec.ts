import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarningsAndCautionsComponent } from './warnings-and-cautions.component';

describe('WarningsAndCautionsComponent', () => {
  let component: WarningsAndCautionsComponent;
  let fixture: ComponentFixture<WarningsAndCautionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningsAndCautionsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarningsAndCautionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
