import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrexDmRefComponent } from './brex-dm-ref.component';

describe('BrexDmRefComponent', () => {
  let component: BrexDmRefComponent;
  let fixture: ComponentFixture<BrexDmRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrexDmRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrexDmRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
