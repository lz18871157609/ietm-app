import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreliminaryRqmtsComponent } from './preliminary-rqmts.component';

describe('PreliminaryRqmtsComponent', () => {
  let component: PreliminaryRqmtsComponent;
  let fixture: ComponentFixture<PreliminaryRqmtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreliminaryRqmtsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreliminaryRqmtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
