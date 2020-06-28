import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShortNameComponent } from './short-name.component';

describe('ShortNameComponent', () => {
  let component: ShortNameComponent;
  let fixture: ComponentFixture<ShortNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortNameComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShortNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
