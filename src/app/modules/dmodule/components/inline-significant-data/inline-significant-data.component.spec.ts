import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InlineSignificantDataComponent } from './inline-significant-data.component';

describe('InlineSignificantDataComponent', () => {
  let component: InlineSignificantDataComponent;
  let fixture: ComponentFixture<InlineSignificantDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineSignificantDataComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InlineSignificantDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
