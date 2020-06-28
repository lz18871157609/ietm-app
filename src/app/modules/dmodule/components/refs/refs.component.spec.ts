import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefsComponent } from './refs.component';

describe('RefsComponent', () => {
  let component: RefsComponent;
  let fixture: ComponentFixture<RefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
