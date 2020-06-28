import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TbodyComponent } from './tbody.component';

describe('TbodyComponent', () => {
  let component: TbodyComponent;
  let fixture: ComponentFixture<TbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbodyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
