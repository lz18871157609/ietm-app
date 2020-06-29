import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PmRefComponent } from './pm-ref.component';

describe('PmRefComponent', () => {
  let component: PmRefComponent;
  let fixture: ComponentFixture<PmRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PmRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
