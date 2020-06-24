import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExternalPubIssueDateComponent } from './external-pub-issue-date.component';

describe('ExternalPubIssueDateComponent', () => {
  let component: ExternalPubIssueDateComponent;
  let fixture: ComponentFixture<ExternalPubIssueDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalPubIssueDateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExternalPubIssueDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
