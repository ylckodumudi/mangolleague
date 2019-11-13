import { TestBed } from '@angular/core/testing';

import { StasticsService } from './stastics.service';

describe('StasticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StasticsService = TestBed.get(StasticsService);
    expect(service).toBeTruthy();
  });
});
