import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrexComponent } from './brex.component';

describe('BrexComponent', () => {
  let component: BrexComponent;
  let fixture: ComponentFixture<BrexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrexComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
