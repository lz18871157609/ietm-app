import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DmIdentComponent } from './dm-ident.component';

describe('DmIdentComponent', () => {
  let component: DmIdentComponent;
  let fixture: ComponentFixture<DmIdentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmIdentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DmIdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
