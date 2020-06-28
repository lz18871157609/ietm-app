import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpareDescrComponent } from './spare-descr.component';

describe('SpareDescrComponent', () => {
  let component: SpareDescrComponent;
  let fixture: ComponentFixture<SpareDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpareDescrComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpareDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
