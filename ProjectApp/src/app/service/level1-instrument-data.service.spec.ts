import { TestBed } from '@angular/core/testing';

import { Level1InstrumentDataService } from './level1-instrument-data.service';

describe('Level1InstrumentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Level1InstrumentDataService = TestBed.get(Level1InstrumentDataService);
    expect(service).toBeTruthy();
  });
});
