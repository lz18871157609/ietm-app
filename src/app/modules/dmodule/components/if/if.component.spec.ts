import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IfComponent } from './if.component';

describe('IfComponent', () => {
  let component: IfComponent;
  let fixture: ComponentFixture<IfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
