import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttentionSequentialListComponent } from './attention-sequential-list.component';

describe('AttentionSequentialListComponent', () => {
  let component: AttentionSequentialListComponent;
  let fixture: ComponentFixture<AttentionSequentialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentionSequentialListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttentionSequentialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
