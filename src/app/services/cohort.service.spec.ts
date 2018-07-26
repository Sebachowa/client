import { TestBed, inject } from '@angular/core/testing';

import { CohortService } from './cohort.service';

describe('CohortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CohortService]
    });
  });

  it('should be created', inject([CohortService], (service: CohortService) => {
    expect(service).toBeTruthy();
  }));
});
