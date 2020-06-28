import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoAssertionsComponent } from './no-assertions.component';

describe('NoAssertionsComponent', () => {
  let component: NoAssertionsComponent;
  let fixture: ComponentFixture<NoAssertionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAssertionsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoAssertionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
