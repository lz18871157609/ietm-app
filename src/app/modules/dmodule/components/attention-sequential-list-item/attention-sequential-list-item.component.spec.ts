import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttentionSequentialListItemComponent } from './attention-sequential-list-item.component';

describe('AttentionSequentialListItemComponent', () => {
  let component: AttentionSequentialListItemComponent;
  let fixture: ComponentFixture<AttentionSequentialListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentionSequentialListItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttentionSequentialListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
