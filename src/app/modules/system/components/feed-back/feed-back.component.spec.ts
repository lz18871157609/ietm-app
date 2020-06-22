import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedBackComponent } from './feed-back.component';

describe('FeedBackComponent', () => {
  let component: FeedBackComponent;
  let fixture: ComponentFixture<FeedBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedBackComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
