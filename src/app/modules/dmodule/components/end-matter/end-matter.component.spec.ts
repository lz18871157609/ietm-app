import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndMatterComponent } from './end-matter.component';

describe('EndMatterComponent', () => {
  let component: EndMatterComponent;
  let fixture: ComponentFixture<EndMatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndMatterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndMatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
