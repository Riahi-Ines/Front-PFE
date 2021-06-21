import { TestBed } from '@angular/core/testing';

import { HoneywellService } from './honeywell.service';

describe('HoneywellService', () => {
  let service: HoneywellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoneywellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
