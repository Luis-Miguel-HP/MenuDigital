import { TestBed } from '@angular/core/testing';

import { XLetraService } from './x-letra.service';

describe('XLetraService', () => {
  let service: XLetraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XLetraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
