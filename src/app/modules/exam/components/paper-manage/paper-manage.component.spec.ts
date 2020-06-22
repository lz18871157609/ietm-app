import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaperManageComponent } from './paper-manage.component';

describe('PaperManageComponent', () => {
  let component: PaperManageComponent;
  let fixture: ComponentFixture<PaperManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperManageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaperManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
