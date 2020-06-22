import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistinguishComponent } from './distinguish.component';

describe('DistinguishComponent', () => {
  let component: DistinguishComponent;
  let fixture: ComponentFixture<DistinguishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinguishComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistinguishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
