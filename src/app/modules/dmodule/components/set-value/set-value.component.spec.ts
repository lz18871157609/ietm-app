import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetValueComponent } from './set-value.component';

describe('SetValueComponent', () => {
  let component: SetValueComponent;
  let fixture: ComponentFixture<SetValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
