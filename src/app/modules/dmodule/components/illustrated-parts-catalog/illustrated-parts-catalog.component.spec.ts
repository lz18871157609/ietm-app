import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IllustratedPartsCatalogComponent } from './illustrated-parts-catalog.component';

describe('IllustratedPartsCatalogComponent', () => {
  let component: IllustratedPartsCatalogComponent;
  let fixture: ComponentFixture<IllustratedPartsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustratedPartsCatalogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IllustratedPartsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
