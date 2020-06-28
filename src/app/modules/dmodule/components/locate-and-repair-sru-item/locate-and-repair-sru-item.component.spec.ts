import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocateAndRepairSruItemComponent } from './locate-and-repair-sru-item.component';

describe('LocateAndRepairSruItemComponent', () => {
  let component: LocateAndRepairSruItemComponent;
  let fixture: ComponentFixture<LocateAndRepairSruItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateAndRepairSruItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocateAndRepairSruItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
