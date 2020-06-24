import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DmIfComponent } from './dm-if.component';

describe('DmIfComponent', () => {
  let component: DmIfComponent;
  let fixture: ComponentFixture<DmIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmIfComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DmIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
