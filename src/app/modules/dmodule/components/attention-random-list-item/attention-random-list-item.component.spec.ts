import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttentionRandomListItemComponent } from './attention-random-list-item.component';

describe('AttentionRandomListItemComponent', () => {
  let component: AttentionRandomListItemComponent;
  let fixture: ComponentFixture<AttentionRandomListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentionRandomListItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttentionRandomListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
