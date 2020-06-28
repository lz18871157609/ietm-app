import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrueValueComponent } from './true-value.component';

describe('TrueValueComponent', () => {
  let component: TrueValueComponent;
  let fixture: ComponentFixture<TrueValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrueValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
