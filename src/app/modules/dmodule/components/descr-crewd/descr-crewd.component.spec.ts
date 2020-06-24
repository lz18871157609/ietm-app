import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescrCrewdComponent } from './descr-crewd.component';

describe('DescrCrewdComponent', () => {
  let component: DescrCrewdComponent;
  let fixture: ComponentFixture<DescrCrewdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescrCrewdComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescrCrewdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
