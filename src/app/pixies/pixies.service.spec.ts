import { TestBed } from '@angular/core/testing';

import { PixiesService } from './pixies.service';

describe('PixiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PixiesService = TestBed.get(PixiesService);
    expect(service).toBeTruthy();
  });
});
