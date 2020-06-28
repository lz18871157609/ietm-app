import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubCrewDrillComponent } from './sub-crew-drill.component';

describe('SubCrewDrillComponent', () => {
  let component: SubCrewDrillComponent;
  let fixture: ComponentFixture<SubCrewDrillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCrewDrillComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubCrewDrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
