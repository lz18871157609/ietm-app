import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AttentionListItemParaComponent } from './attention-list-item-para.component';

describe('AttentionListItemParaComponent', () => {
  let component: AttentionListItemParaComponent;
  let fixture: ComponentFixture<AttentionListItemParaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentionListItemParaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AttentionListItemParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
