import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescrComponent } from './descr.component';

describe('DescrComponent', () => {
  let component: DescrComponent;
  let fixture: ComponentFixture<DescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescrComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
