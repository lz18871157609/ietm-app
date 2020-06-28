import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocateAndRepairComponent } from './locate-and-repair.component';

describe('LocateAndRepairComponent', () => {
  let component: LocateAndRepairComponent;
  let fixture: ComponentFixture<LocateAndRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateAndRepairComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocateAndRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
