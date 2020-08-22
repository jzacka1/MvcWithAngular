import { TestBed } from '@angular/core/testing';

import { HealthPlansService } from './health-plans.service';

describe('HealthPlansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthPlansService = TestBed.get(HealthPlansService);
    expect(service).toBeTruthy();
  });
});
