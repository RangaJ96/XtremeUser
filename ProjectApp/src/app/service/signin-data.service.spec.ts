import { TestBed } from '@angular/core/testing';

import { SigninDataService } from './signin-data.service';

describe('SigninDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SigninDataService = TestBed.get(SigninDataService);
    expect(service).toBeTruthy();
  });
});
