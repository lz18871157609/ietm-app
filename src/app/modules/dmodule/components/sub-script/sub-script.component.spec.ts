import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubScriptComponent } from './sub-script.component';

describe('SubScriptComponent', () => {
  let component: SubScriptComponent;
  let fixture: ComponentFixture<SubScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubScriptComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
