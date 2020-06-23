import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParaComponent } from './para.component';

describe('ParaComponent', () => {
  let component: ParaComponent;
  let fixture: ComponentFixture<ParaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
