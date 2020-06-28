import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpanspecComponent } from './spanspec.component';

describe('SpanspecComponent', () => {
  let component: SpanspecComponent;
  let fixture: ComponentFixture<SpanspecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanspecComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpanspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
