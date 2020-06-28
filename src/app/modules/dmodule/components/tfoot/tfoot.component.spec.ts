import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TfootComponent } from './tfoot.component';

describe('TfootComponent', () => {
  let component: TfootComponent;
  let fixture: ComponentFixture<TfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfootComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
