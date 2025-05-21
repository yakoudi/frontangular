import { TestBed } from '@angular/core/testing';

import { DossiermedicalService } from './dossiermedical.service';

describe('DossiermedicalService', () => {
  let service: DossiermedicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DossiermedicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
