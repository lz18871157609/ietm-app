import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearnComponent } from './learn.component';

describe('LearnComponent', () => {
  let component: LearnComponent;
  let fixture: ComponentFixture<LearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
