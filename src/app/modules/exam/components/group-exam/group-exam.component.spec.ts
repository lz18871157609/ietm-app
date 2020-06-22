import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroupExamComponent } from './group-exam.component';

describe('GroupExamComponent', () => {
  let component: GroupExamComponent;
  let fixture: ComponentFixture<GroupExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupExamComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroupExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
