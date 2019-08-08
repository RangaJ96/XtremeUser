import { TestBed } from '@angular/core/testing';

import { SignUpInstituteService } from './sign-up-institute.service';

describe('SignUpInstituteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignUpInstituteService = TestBed.get(SignUpInstituteService);
    expect(service).toBeTruthy();
  });
});
