import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsolatedFaultAltsComponent } from './isolated-fault-alts.component';

describe('IsolatedFaultAltsComponent', () => {
  let component: IsolatedFaultAltsComponent;
  let fixture: ComponentFixture<IsolatedFaultAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsolatedFaultAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsolatedFaultAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
