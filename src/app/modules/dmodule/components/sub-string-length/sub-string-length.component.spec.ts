import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubStringLengthComponent } from './sub-string-length.component';

describe('SubStringLengthComponent', () => {
  let component: SubStringLengthComponent;
  let fixture: ComponentFixture<SubStringLengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubStringLengthComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubStringLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
