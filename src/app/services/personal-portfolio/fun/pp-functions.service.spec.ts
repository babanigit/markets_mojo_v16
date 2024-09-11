import { TestBed } from '@angular/core/testing';

import { PpFunctionsService } from './pp-functions.service';

describe('PpFunctionsService', () => {
  let service: PpFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PpFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
