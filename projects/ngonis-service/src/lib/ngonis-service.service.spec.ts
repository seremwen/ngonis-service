import { TestBed } from '@angular/core/testing';

import { NgonisServiceService } from './ngonis-service.service';

describe('NgonisServiceService', () => {
  let service: NgonisServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgonisServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
