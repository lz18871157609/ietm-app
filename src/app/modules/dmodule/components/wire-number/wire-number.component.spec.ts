import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WireNumberComponent } from './wire-number.component';

describe('WireNumberComponent', () => {
  let component: WireNumberComponent;
  let fixture: ComponentFixture<WireNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireNumberComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WireNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
