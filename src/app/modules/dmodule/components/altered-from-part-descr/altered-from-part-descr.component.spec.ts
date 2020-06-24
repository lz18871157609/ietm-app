import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlteredFromPartDescrComponent } from './altered-from-part-descr.component';

describe('AlteredFromPartDescrComponent', () => {
  let component: AlteredFromPartDescrComponent;
  let fixture: ComponentFixture<AlteredFromPartDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteredFromPartDescrComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlteredFromPartDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
