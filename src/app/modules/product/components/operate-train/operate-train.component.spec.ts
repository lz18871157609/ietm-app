import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperateTrainComponent } from './operate-train.component';

describe('OperateTrainComponent', () => {
  let component: OperateTrainComponent;
  let fixture: ComponentFixture<OperateTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperateTrainComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperateTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
