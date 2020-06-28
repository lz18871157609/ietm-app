import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestNameComponent } from './test-name.component';

describe('TestNameComponent', () => {
  let component: TestNameComponent;
  let fixture: ComponentFixture<TestNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNameComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
