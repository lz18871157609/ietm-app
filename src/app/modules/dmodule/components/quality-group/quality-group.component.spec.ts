import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QualityGroupComponent } from './quality-group.component';

describe('QualityGroupComponent', () => {
  let component: QualityGroupComponent;
  let fixture: ComponentFixture<QualityGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityGroupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QualityGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
