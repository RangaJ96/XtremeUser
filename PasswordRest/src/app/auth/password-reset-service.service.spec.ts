import { TestBed, inject } from '@angular/core/testing';

import { PasswordResetServiceService } from './password-reset-service.service';

describe('PasswordResetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordResetServiceService]
    });
  });

  it('should be created', inject([PasswordResetServiceService], (service: PasswordResetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
