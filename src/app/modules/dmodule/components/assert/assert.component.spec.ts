import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssertComponent } from './assert.component';

describe('AssertComponent', () => {
  let component: AssertComponent;
  let fixture: ComponentFixture<AssertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssertComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
