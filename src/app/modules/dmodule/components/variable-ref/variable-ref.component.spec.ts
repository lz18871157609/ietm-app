import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VariableRefComponent } from './variable-ref.component';

describe('VariableRefComponent', () => {
  let component: VariableRefComponent;
  let fixture: ComponentFixture<VariableRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VariableRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
