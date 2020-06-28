import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkAreaLocationGroupComponent } from './work-area-location-group.component';

describe('WorkAreaLocationGroupComponent', () => {
  let component: WorkAreaLocationGroupComponent;
  let fixture: ComponentFixture<WorkAreaLocationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAreaLocationGroupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkAreaLocationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
