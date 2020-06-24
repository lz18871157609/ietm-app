import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmphasisComponent } from './emphasis.component';

describe('EmphasisComponent', () => {
  let component: EmphasisComponent;
  let fixture: ComponentFixture<EmphasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmphasisComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmphasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
