import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SequentialListComponent } from './sequential-list.component';

describe('SequentialListComponent', () => {
  let component: SequentialListComponent;
  let fixture: ComponentFixture<SequentialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequentialListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SequentialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
