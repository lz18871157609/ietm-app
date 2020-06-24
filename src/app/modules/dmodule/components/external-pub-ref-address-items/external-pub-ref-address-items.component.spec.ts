import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExternalPubRefAddressItemsComponent } from './external-pub-ref-address-items.component';

describe('ExternalPubRefAddressItemsComponent', () => {
  let component: ExternalPubRefAddressItemsComponent;
  let fixture: ComponentFixture<ExternalPubRefAddressItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalPubRefAddressItemsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExternalPubRefAddressItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
