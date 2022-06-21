import { TestBed } from '@angular/core/testing';

import { StorageTraitementService } from './storage-traitement.service';

describe('StorageTraitementService', () => {
  let service: StorageTraitementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageTraitementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
