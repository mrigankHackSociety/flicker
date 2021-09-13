import { TestBed } from '@angular/core/testing';

import { FlickerServiceService } from './flicker-service.service';

describe('FlickerServiceService', () => {
  let service: FlickerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlickerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
