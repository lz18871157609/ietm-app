import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendNameComponent } from './send-name.component';

describe('SendNameComponent', () => {
  let component: SendNameComponent;
  let fixture: ComponentFixture<SendNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendNameComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
