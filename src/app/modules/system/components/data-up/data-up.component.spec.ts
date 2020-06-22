import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataUpComponent } from './data-up.component';

describe('DataUpComponent', () => {
  let component: DataUpComponent;
  let fixture: ComponentFixture<DataUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
