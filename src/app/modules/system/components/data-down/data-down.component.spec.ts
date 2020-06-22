import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataDownComponent } from './data-down.component';

describe('DataDownComponent', () => {
  let component: DataDownComponent;
  let fixture: ComponentFixture<DataDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDownComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
