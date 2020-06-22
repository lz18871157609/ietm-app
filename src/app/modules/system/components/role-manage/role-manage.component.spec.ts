import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoleManageComponent } from './role-manage.component';

describe('RoleManageComponent', () => {
  let component: RoleManageComponent;
  let fixture: ComponentFixture<RoleManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleManageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoleManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
