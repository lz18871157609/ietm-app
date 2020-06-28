import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerbatimTextComponent } from './verbatim-text.component';

describe('VerbatimTextComponent', () => {
  let component: VerbatimTextComponent;
  let fixture: ComponentFixture<VerbatimTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbatimTextComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerbatimTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
