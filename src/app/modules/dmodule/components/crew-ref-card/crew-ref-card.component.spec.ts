import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrewRefCardComponent } from './crew-ref-card.component';

describe('CrewRefCardComponent', () => {
  let component: CrewRefCardComponent;
  let fixture: ComponentFixture<CrewRefCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewRefCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrewRefCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
