import { TestBed } from '@angular/core/testing';

import { ContainService } from './contain.service';

describe('ContainService', () => {
  let service: ContainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
