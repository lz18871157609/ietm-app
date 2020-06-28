import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TechStandardComponent } from './tech-standard.component';

describe('TechStandardComponent', () => {
  let component: TechStandardComponent;
  let fixture: ComponentFixture<TechStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechStandardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
