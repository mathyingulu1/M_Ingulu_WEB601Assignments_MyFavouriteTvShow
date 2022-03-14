import { TestBed } from '@angular/core/testing';

import { tvshowService } from './tvshow.service';

describe('TvshowService', () => {
  let service: tvshowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tvshowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
