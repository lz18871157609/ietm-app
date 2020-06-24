import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FootnoteComponent } from './footnote.component';

describe('FootnoteComponent', () => {
  let component: FootnoteComponent;
  let fixture: ComponentFixture<FootnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootnoteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FootnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
