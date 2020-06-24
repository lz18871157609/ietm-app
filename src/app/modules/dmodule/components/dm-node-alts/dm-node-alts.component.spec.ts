import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DmNodeAltsComponent } from './dm-node-alts.component';

describe('DmNodeAltsComponent', () => {
  let component: DmNodeAltsComponent;
  let fixture: ComponentFixture<DmNodeAltsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmNodeAltsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DmNodeAltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
