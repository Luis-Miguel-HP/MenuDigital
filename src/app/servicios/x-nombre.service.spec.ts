import { TestBed } from '@angular/core/testing';

import { XNombreService } from './x-nombre.service';

describe('XNombreService', () => {
  let service: XNombreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XNombreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
