import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DmRefComponent } from './dm-ref.component';

describe('DmRefComponent', () => {
  let component: DmRefComponent;
  let fixture: ComponentFixture<DmRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DmRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
