import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcronymComponent } from './acronym.component';

describe('AcronymComponent', () => {
  let component: AcronymComponent;
  let fixture: ComponentFixture<AcronymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcronymComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcronymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
