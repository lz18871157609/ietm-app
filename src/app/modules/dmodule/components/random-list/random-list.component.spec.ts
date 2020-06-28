import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RandomListComponent } from './random-list.component';

describe('RandomListComponent', () => {
  let component: RandomListComponent;
  let fixture: ComponentFixture<RandomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RandomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
