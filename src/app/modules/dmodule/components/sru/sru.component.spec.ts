import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SruComponent } from './sru.component';

describe('SruComponent', () => {
  let component: SruComponent;
  let fixture: ComponentFixture<SruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SruComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
