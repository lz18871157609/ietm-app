import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManualsManageComponent } from './manuals-manage.component';

describe('ManualsManageComponent', () => {
  let component: ManualsManageComponent;
  let fixture: ComponentFixture<ManualsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualsManageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManualsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
