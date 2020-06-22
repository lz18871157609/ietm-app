import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcronymTermComponent } from './acronym-term.component';

describe('AcronymTermComponent', () => {
  let component: AcronymTermComponent;
  let fixture: ComponentFixture<AcronymTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcronymTermComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcronymTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
