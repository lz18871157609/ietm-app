import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FootnoteRefComponent } from './footnote-ref.component';

describe('FootnoteRefComponent', () => {
  let component: FootnoteRefComponent;
  let fixture: ComponentFixture<FootnoteRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootnoteRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FootnoteRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
