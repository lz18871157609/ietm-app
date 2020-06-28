import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SourceDmIdentComponent } from './source-dm-ident.component';

describe('SourceDmIdentComponent', () => {
  let component: SourceDmIdentComponent;
  let fixture: ComponentFixture<SourceDmIdentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceDmIdentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SourceDmIdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
