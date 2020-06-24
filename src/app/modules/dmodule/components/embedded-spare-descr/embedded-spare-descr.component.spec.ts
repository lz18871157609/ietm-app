import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmbeddedSpareDescrComponent } from './embedded-spare-descr.component';

describe('EmbeddedSpareDescrComponent', () => {
  let component: EmbeddedSpareDescrComponent;
  let fixture: ComponentFixture<EmbeddedSpareDescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbeddedSpareDescrComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmbeddedSpareDescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
