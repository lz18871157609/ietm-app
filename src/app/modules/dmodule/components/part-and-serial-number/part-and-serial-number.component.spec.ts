import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartAndSerialNumberComponent } from './part-and-serial-number.component';

describe('PartAndSerialNumberComponent', () => {
  let component: PartAndSerialNumberComponent;
  let fixture: ComponentFixture<PartAndSerialNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartAndSerialNumberComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartAndSerialNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
