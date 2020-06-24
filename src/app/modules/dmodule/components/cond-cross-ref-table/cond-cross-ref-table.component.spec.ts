import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CondCrossRefTableComponent } from './cond-cross-ref-table.component';

describe('CondCrossRefTableComponent', () => {
  let component: CondCrossRefTableComponent;
  let fixture: ComponentFixture<CondCrossRefTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondCrossRefTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CondCrossRefTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
