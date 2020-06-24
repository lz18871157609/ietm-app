import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColspecComponent } from './colspec.component';

describe('ColspecComponent', () => {
  let component: ColspecComponent;
  let fixture: ComponentFixture<ColspecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColspecComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
