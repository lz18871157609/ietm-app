import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerminationModuleGroupingValueComponent } from './termination-module-grouping-value.component';

describe('TerminationModuleGroupingValueComponent', () => {
  let component: TerminationModuleGroupingValueComponent;
  let fixture: ComponentFixture<TerminationModuleGroupingValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminationModuleGroupingValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerminationModuleGroupingValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
