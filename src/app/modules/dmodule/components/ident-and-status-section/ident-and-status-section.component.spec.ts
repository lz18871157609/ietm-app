import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdentAndStatusSectionComponent } from './ident-and-status-section.component';

describe('IdentAndStatusSectionComponent', () => {
  let component: IdentAndStatusSectionComponent;
  let fixture: ComponentFixture<IdentAndStatusSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentAndStatusSectionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdentAndStatusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
