import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserManageComponent } from './user-manage.component';

describe('UserManageComponent', () => {
  let component: UserManageComponent;
  let fixture: ComponentFixture<UserManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
