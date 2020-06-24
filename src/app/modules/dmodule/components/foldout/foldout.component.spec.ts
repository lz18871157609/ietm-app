import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoldoutComponent } from './foldout.component';

describe('FoldoutComponent', () => {
  let component: FoldoutComponent;
  let fixture: ComponentFixture<FoldoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldoutComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoldoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
