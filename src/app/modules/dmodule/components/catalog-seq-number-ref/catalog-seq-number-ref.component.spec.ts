import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatalogSeqNumberRefComponent } from './catalog-seq-number-ref.component';

describe('CatalogSeqNumberRefComponent', () => {
  let component: CatalogSeqNumberRefComponent;
  let fixture: ComponentFixture<CatalogSeqNumberRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogSeqNumberRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogSeqNumberRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
