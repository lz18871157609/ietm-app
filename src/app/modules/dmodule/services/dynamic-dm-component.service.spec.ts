/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DynamicDmComponentService } from './dynamic-dm-component.service';

describe('Service: DynamicDmComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicDmComponentService]
    });
  });

  it('should ...', inject([DynamicDmComponentService], (service: DynamicDmComponentService) => {
    expect(service).toBeTruthy();
  }));
});
