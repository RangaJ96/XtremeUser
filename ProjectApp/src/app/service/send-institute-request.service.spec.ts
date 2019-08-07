import { TestBed } from '@angular/core/testing';

import { SendInstituteRequestService } from './send-institute-request.service';

describe('SendInstituteRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendInstituteRequestService = TestBed.get(SendInstituteRequestService);
    expect(service).toBeTruthy();
  });
});
