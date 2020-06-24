import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DmSeqComponent } from './dm-seq.component';

describe('DmSeqComponent', () => {
  let component: DmSeqComponent;
  let fixture: ComponentFixture<DmSeqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmSeqComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DmSeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
