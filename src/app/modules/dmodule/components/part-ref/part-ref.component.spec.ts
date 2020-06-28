import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartRefComponent } from './part-ref.component';

describe('PartRefComponent', () => {
  let component: PartRefComponent;
  let fixture: ComponentFixture<PartRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartRefComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
