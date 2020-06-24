import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaultCondComponent } from './fault-cond.component';

describe('FaultCondComponent', () => {
  let component: FaultCondComponent;
  let fixture: ComponentFixture<FaultCondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultCondComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaultCondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
