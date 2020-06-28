import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferencedApplicGroupRefComponent } from './referenced-applic-group-ref.component';

describe('ReferencedApplicGroupRefComponent', () => {
  let component: ReferencedApplicGroupRefComponent;
  let fixture: ComponentFixture<ReferencedApplicGroupRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencedApplicGroupRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferencedApplicGroupRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
