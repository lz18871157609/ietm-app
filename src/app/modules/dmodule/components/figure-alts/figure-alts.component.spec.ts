import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FigureAltsComponent } from './figure-alts.component';

describe('FigureAltsComponent', () => {
  let component: FigureAltsComponent;
  let fixture: ComponentFixture<FigureAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigureAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FigureAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
