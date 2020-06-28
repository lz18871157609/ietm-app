import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealValueComponent } from './real-value.component';

describe('RealValueComponent', () => {
  let component: RealValueComponent;
  let fixture: ComponentFixture<RealValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
