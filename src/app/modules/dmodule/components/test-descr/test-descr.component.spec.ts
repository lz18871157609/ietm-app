import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestDescrComponent } from './test-descr.component';

describe('TestDescrComponent', () => {
  let component: TestDescrComponent;
  let fixture: ComponentFixture<TestDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDescrComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
