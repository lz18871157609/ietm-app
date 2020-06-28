import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SerialNumberComponent } from './serial-number.component';

describe('SerialNumberComponent', () => {
  let component: SerialNumberComponent;
  let fixture: ComponentFixture<SerialNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialNumberComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SerialNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
