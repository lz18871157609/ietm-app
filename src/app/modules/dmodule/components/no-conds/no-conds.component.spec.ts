import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoCondsComponent } from './no-conds.component';

describe('NoCondsComponent', () => {
  let component: NoCondsComponent;
  let fixture: ComponentFixture<NoCondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoCondsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoCondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
