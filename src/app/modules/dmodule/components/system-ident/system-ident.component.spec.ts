import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SystemIdentComponent } from './system-ident.component';

describe('SystemIdentComponent', () => {
  let component: SystemIdentComponent;
  let fixture: ComponentFixture<SystemIdentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemIdentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SystemIdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
