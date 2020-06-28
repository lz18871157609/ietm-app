import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheadComponent } from './thead.component';

describe('TheadComponent', () => {
  let component: TheadComponent;
  let fixture: ComponentFixture<TheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
