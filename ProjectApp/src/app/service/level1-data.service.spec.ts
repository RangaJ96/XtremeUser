import { TestBed } from '@angular/core/testing';

import { Level1DataService } from './level1-data.service';

describe('Level1DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Level1DataService = TestBed.get(Level1DataService);
    expect(service).toBeTruthy();
  });
});
