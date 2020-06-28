import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarningRefComponent } from './warning-ref.component';

describe('WarningRefComponent', () => {
  let component: WarningRefComponent;
  let fixture: ComponentFixture<WarningRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarningRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
