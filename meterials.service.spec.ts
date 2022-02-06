import { TestBed } from '@angular/core/testing';

import { MeterialsService } from './meterials.service';

describe('MeterialsService', () => {
  let service: MeterialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
