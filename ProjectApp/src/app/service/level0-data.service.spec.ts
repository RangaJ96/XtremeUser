import { TestBed } from '@angular/core/testing';

import { Level0DataService } from './level0-data.service';

describe('Level0DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Level0DataService = TestBed.get(Level0DataService);
    expect(service).toBeTruthy();
  });
});
