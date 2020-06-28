import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LruItemComponent } from './lru-item.component';

describe('LruItemComponent', () => {
  let component: LruItemComponent;
  let fixture: ComponentFixture<LruItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LruItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LruItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
