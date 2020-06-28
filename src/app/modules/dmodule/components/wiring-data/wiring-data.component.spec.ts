import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WiringDataComponent } from './wiring-data.component';

describe('WiringDataComponent', () => {
  let component: WiringDataComponent;
  let fixture: ComponentFixture<WiringDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiringDataComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WiringDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
