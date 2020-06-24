import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmbeddedSupplyDescrComponent } from './embedded-supply-descr.component';

describe('EmbeddedSupplyDescrComponent', () => {
  let component: EmbeddedSupplyDescrComponent;
  let fixture: ComponentFixture<EmbeddedSupplyDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbeddedSupplyDescrComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmbeddedSupplyDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
