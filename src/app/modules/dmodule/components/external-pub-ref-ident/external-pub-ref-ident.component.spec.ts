import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExternalPubRefIdentComponent } from './external-pub-ref-ident.component';

describe('ExternalPubRefIdentComponent', () => {
  let component: ExternalPubRefIdentComponent;
  let fixture: ComponentFixture<ExternalPubRefIdentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalPubRefIdentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExternalPubRefIdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
