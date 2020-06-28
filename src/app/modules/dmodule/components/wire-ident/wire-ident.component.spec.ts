import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WireIdentComponent } from './wire-ident.component';

describe('WireIdentComponent', () => {
  let component: WireIdentComponent;
  let fixture: ComponentFixture<WireIdentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireIdentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WireIdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
