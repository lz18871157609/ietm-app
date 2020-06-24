import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DmThenSeqComponent } from './dm-then-seq.component';

describe('DmThenSeqComponent', () => {
  let component: DmThenSeqComponent;
  let fixture: ComponentFixture<DmThenSeqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmThenSeqComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DmThenSeqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
