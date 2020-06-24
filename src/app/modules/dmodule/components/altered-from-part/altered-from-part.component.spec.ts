import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlteredFromPartComponent } from './altered-from-part.component';

describe('AlteredFromPartComponent', () => {
  let component: AlteredFromPartComponent;
  let fixture: ComponentFixture<AlteredFromPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteredFromPartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlteredFromPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
