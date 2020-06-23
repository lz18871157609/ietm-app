import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TechNameComponent } from './tech-name.component';

describe('TechNameComponent', () => {
  let component: TechNameComponent;
  let fixture: ComponentFixture<TechNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechNameComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
