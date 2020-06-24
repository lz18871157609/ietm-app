import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrewDrillComponent } from './crew-drill.component';

describe('CrewDrillComponent', () => {
  let component: CrewDrillComponent;
  let fixture: ComponentFixture<CrewDrillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewDrillComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrewDrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
