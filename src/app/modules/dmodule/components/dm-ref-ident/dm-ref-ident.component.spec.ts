import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DmRefIdentComponent } from './dm-ref-ident.component';

describe('DmRefIdentComponent', () => {
  let component: DmRefIdentComponent;
  let fixture: ComponentFixture<DmRefIdentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmRefIdentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DmRefIdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
