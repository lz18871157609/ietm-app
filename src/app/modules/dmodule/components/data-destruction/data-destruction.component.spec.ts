import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataDestructionComponent } from './data-destruction.component';

describe('DataDestructionComponent', () => {
  let component: DataDestructionComponent;
  let fixture: ComponentFixture<DataDestructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDestructionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataDestructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
