import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InternalRefComponent } from './internal-ref.component';

describe('InternalRefComponent', () => {
  let component: InternalRefComponent;
  let fixture: ComponentFixture<InternalRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InternalRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
