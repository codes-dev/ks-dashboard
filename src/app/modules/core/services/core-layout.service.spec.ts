import { TestBed } from '@angular/core/testing';

import { CoreLayoutService } from './core-layout.service';

describe('CoreLayoutService', () => {
  let service: CoreLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
