import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FalseValueComponent } from './false-value.component';

describe('FalseValueComponent', () => {
  let component: FalseValueComponent;
  let fixture: ComponentFixture<FalseValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalseValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FalseValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
