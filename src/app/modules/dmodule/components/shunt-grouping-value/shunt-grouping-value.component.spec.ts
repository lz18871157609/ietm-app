import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShuntGroupingValueComponent } from './shunt-grouping-value.component';

describe('ShuntGroupingValueComponent', () => {
  let component: ShuntGroupingValueComponent;
  let fixture: ComponentFixture<ShuntGroupingValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShuntGroupingValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShuntGroupingValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
