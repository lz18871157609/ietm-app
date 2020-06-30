import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopicAnswerModalComponent } from './topic-answer-modal.component';

describe('TopicAnswerModalComponent', () => {
  let component: TopicAnswerModalComponent;
  let fixture: ComponentFixture<TopicAnswerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicAnswerModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopicAnswerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
