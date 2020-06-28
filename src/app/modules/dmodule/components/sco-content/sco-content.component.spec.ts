import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScoContentComponent } from './sco-content.component';

describe('ScoContentComponent', () => {
  let component: ScoContentComponent;
  let fixture: ComponentFixture<ScoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
