import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupplyRqmtRefComponent } from './supply-rqmt-ref.component';

describe('SupplyRqmtRefComponent', () => {
  let component: SupplyRqmtRefComponent;
  let fixture: ComponentFixture<SupplyRqmtRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyRqmtRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupplyRqmtRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
