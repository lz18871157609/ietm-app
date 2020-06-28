import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SbComponent } from './sb.component';

describe('SbComponent', () => {
  let component: SbComponent;
  let fixture: ComponentFixture<SbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
