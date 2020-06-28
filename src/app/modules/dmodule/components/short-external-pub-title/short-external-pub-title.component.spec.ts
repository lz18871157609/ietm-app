import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShortExternalPubTitleComponent } from './short-external-pub-title.component';

describe('ShortExternalPubTitleComponent', () => {
  let component: ShortExternalPubTitleComponent;
  let fixture: ComponentFixture<ShortExternalPubTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortExternalPubTitleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShortExternalPubTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
