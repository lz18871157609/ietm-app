import { TestBed } from '@angular/core/testing';

import { ImageClassifyService } from './image-classify.service';

describe('ImageClassifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageClassifyService = TestBed.get(ImageClassifyService);
    expect(service).toBeTruthy();
  });
});
