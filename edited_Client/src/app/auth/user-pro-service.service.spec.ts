import { TestBed, inject } from '@angular/core/testing';

import { UserProServiceService } from './user-pro-service.service';

describe('UserProServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProServiceService]
    });
  });

  it('should be created', inject([UserProServiceService], (service: UserProServiceService) => {
    expect(service).toBeTruthy();
  }));
});
