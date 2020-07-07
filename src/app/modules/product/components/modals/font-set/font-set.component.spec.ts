import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FontSetComponent } from './font-set.component';

describe('FontSetComponent', () => {
  let component: FontSetComponent;
  let fixture: ComponentFixture<FontSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSetComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FontSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
