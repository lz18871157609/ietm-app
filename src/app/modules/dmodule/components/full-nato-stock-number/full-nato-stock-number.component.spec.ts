import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullNatoStockNumberComponent } from './full-nato-stock-number.component';

describe('FullNatoStockNumberComponent', () => {
  let component: FullNatoStockNumberComponent;
  let fixture: ComponentFixture<FullNatoStockNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullNatoStockNumberComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullNatoStockNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
