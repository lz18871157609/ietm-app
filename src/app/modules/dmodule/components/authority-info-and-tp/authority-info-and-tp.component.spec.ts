import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthorityInfoAndTpComponent } from './authority-info-and-tp.component';

describe('AuthorityInfoAndTpComponent', () => {
  let component: AuthorityInfoAndTpComponent;
  let fixture: ComponentFixture<AuthorityInfoAndTpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorityInfoAndTpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorityInfoAndTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
