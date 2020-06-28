import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PmRefIdentComponent } from './pm-ref-ident.component';

describe('PmRefIdentComponent', () => {
  let component: PmRefIdentComponent;
  let fixture: ComponentFixture<PmRefIdentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmRefIdentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PmRefIdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
