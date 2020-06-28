import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoSparesComponent } from './no-spares.component';

describe('NoSparesComponent', () => {
  let component: NoSparesComponent;
  let fixture: ComponentFixture<NoSparesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSparesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoSparesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
