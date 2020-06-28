import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WireComponent } from './wire.component';

describe('WireComponent', () => {
  let component: WireComponent;
  let fixture: ComponentFixture<WireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
