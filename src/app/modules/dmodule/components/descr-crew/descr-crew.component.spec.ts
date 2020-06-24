import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescrCrewComponent } from './descr-crew.component';

describe('DescrCrewComponent', () => {
  let component: DescrCrewComponent;
  let fixture: ComponentFixture<DescrCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescrCrewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescrCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
