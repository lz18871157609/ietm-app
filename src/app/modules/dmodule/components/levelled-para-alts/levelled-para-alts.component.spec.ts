import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LevelledParaAltsComponent } from './levelled-para-alts.component';

describe('LevelledParaAltsComponent', () => {
  let component: LevelledParaAltsComponent;
  let fixture: ComponentFixture<LevelledParaAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelledParaAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LevelledParaAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
