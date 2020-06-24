import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElseIfComponent } from './else-if.component';

describe('ElseIfComponent', () => {
  let component: ElseIfComponent;
  let fixture: ComponentFixture<ElseIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElseIfComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElseIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
