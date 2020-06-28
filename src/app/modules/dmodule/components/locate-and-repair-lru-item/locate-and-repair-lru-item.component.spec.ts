import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocateAndRepairLruItemComponent } from './locate-and-repair-lru-item.component';

describe('LocateAndRepairLruItemComponent', () => {
  let component: LocateAndRepairLruItemComponent;
  let fixture: ComponentFixture<LocateAndRepairLruItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateAndRepairLruItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocateAndRepairLruItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
