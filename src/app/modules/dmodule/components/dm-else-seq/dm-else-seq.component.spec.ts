import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DmElseSeqComponent } from './dm-else-seq.component';

describe('DmElseSeqComponent', () => {
  let component: DmElseSeqComponent;
  let fixture: ComponentFixture<DmElseSeqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmElseSeqComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DmElseSeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
