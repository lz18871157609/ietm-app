import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PmRefAddressItemsComponent } from './pm-ref-address-items.component';

describe('PmRefAddressItemsComponent', () => {
  let component: PmRefAddressItemsComponent;
  let fixture: ComponentFixture<PmRefAddressItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmRefAddressItemsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PmRefAddressItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
