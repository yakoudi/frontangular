import { TestBed } from '@angular/core/testing';

import { ServiceappoinmentService } from './serviceappoinment.service';

describe('ServiceappoinmentService', () => {
  let service: ServiceappoinmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceappoinmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
