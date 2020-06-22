import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccessPointRefComponent } from './access-point-ref.component';

describe('AccessPointRefComponent', () => {
  let component: AccessPointRefComponent;
  let fixture: ComponentFixture<AccessPointRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessPointRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessPointRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
