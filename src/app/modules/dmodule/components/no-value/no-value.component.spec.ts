import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoValueComponent } from './no-value.component';

describe('NoValueComponent', () => {
  let component: NoValueComponent;
  let fixture: ComponentFixture<NoValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
