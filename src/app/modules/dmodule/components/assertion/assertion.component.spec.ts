import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssertionComponent } from './assertion.component';

describe('AssertionComponent', () => {
  let component: AssertionComponent;
  let fixture: ComponentFixture<AssertionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssertionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
