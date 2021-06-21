import { TestBed } from '@angular/core/testing';

import { AbbService } from './abb.service';

describe('AbbService', () => {
  let service: AbbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
