import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcronymDefinitionComponent } from './acronym-definition.component';

describe('AcronymDefinitionComponent', () => {
  let component: AcronymDefinitionComponent;
  let fixture: ComponentFixture<AcronymDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcronymDefinitionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcronymDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
