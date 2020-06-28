import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StringValueComponent } from './string-value.component';

describe('StringValueComponent', () => {
  let component: StringValueComponent;
  let fixture: ComponentFixture<StringValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StringValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
