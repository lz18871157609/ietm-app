import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopicManageComponent } from './topic-manage.component';

describe('TopicManageComponent', () => {
  let component: TopicManageComponent;
  let fixture: ComponentFixture<TopicManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicManageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopicManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
