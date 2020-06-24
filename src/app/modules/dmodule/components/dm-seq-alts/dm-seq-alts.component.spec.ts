import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DmSeqAltsComponent } from './dm-seq-alts.component';

describe('DmSeqAltsComponent', () => {
  let component: DmSeqAltsComponent;
  let fixture: ComponentFixture<DmSeqAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmSeqAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DmSeqAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
