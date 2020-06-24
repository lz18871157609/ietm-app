import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicCorrelatedFaultsComponent } from './basic-correlated-faults.component';

describe('BasicCorrelatedFaultsComponent', () => {
  let component: BasicCorrelatedFaultsComponent;
  let fixture: ComponentFixture<BasicCorrelatedFaultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCorrelatedFaultsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicCorrelatedFaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
