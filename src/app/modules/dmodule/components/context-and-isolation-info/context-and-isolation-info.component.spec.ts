import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContextAndIsolationInfoComponent } from './context-and-isolation-info.component';

describe('ContextAndIsolationInfoComponent', () => {
  let component: ContextAndIsolationInfoComponent;
  let fixture: ComponentFixture<ContextAndIsolationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextAndIsolationInfoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContextAndIsolationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
