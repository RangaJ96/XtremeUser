import { TestBed } from '@angular/core/testing';

import { InstituteDataService } from './institute-data.service';

describe('InstituteDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstituteDataService = TestBed.get(InstituteDataService);
    expect(service).toBeTruthy();
  });
});
