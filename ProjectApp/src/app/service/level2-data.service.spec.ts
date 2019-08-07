import { TestBed } from '@angular/core/testing';

import { Level2DataService } from './level2-data.service';

describe('Level2DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Level2DataService = TestBed.get(Level2DataService);
    expect(service).toBeTruthy();
  });
});
