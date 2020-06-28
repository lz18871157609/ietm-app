import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QualityToleranceComponent } from './quality-tolerance.component';

describe('QualityToleranceComponent', () => {
  let component: QualityToleranceComponent;
  let fixture: ComponentFixture<QualityToleranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityToleranceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QualityToleranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
