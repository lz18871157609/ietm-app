import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarningsAndCautionsRefComponent } from './warnings-and-cautions-ref.component';

describe('WarningsAndCautionsRefComponent', () => {
  let component: WarningsAndCautionsRefComponent;
  let fixture: ComponentFixture<WarningsAndCautionsRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningsAndCautionsRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarningsAndCautionsRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
