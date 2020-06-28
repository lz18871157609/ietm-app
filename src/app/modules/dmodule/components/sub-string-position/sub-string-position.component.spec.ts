import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubStringPositionComponent } from './sub-string-position.component';

describe('SubStringPositionComponent', () => {
  let component: SubStringPositionComponent;
  let fixture: ComponentFixture<SubStringPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubStringPositionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubStringPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
