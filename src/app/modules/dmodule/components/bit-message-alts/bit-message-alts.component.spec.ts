import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BitMessageAltsComponent } from './bit-message-alts.component';

describe('BitMessageAltsComponent', () => {
  let component: BitMessageAltsComponent;
  let fixture: ComponentFixture<BitMessageAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitMessageAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BitMessageAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
