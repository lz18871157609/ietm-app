import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QualityValueComponent } from './quality-value.component';

describe('QualityValueComponent', () => {
  let component: QualityValueComponent;
  let fixture: ComponentFixture<QualityValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QualityValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
