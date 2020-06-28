import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepositorySourceDmIdentComponent } from './repository-source-dm-ident.component';

describe('RepositorySourceDmIdentComponent', () => {
  let component: RepositorySourceDmIdentComponent;
  let fixture: ComponentFixture<RepositorySourceDmIdentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorySourceDmIdentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepositorySourceDmIdentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
