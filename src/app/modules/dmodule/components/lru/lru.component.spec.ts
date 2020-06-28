import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LruComponent } from './lru.component';

describe('LruComponent', () => {
  let component: LruComponent;
  let fixture: ComponentFixture<LruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LruComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
