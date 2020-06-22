import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserSetingsComponent } from './user-setings.component';

describe('UserSetingsComponent', () => {
  let component: UserSetingsComponent;
  let fixture: ComponentFixture<UserSetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSetingsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserSetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
