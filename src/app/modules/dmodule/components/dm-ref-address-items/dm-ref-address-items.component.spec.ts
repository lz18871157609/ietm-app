import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DmRefAddressItemsComponent } from './dm-ref-address-items.component';

describe('DmRefAddressItemsComponent', () => {
  let component: DmRefAddressItemsComponent;
  let fixture: ComponentFixture<DmRefAddressItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmRefAddressItemsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DmRefAddressItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
