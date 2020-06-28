import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SruItemComponent } from './sru-item.component';

describe('SruItemComponent', () => {
  let component: SruItemComponent;
  let fixture: ComponentFixture<SruItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SruItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SruItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
