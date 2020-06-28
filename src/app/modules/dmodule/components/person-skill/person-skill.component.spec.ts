import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonSkillComponent } from './person-skill.component';

describe('PersonSkillComponent', () => {
  let component: PersonSkillComponent;
  let fixture: ComponentFixture<PersonSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonSkillComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
