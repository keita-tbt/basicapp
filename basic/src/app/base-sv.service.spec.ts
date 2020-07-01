import { TestBed } from '@angular/core/testing';

import { BaseSvService } from './base-sv.service';

describe('BaseSvService', () => {
  let service: BaseSvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
