import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlockGroupingValueComponent } from './block-grouping-value.component';

describe('BlockGroupingValueComponent', () => {
  let component: BlockGroupingValueComponent;
  let fixture: ComponentFixture<BlockGroupingValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockGroupingValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlockGroupingValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
