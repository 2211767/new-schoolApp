import { TestBed } from '@angular/core/testing';

import { SchoolstafService } from './schoolstaf.service';

describe('SchoolstafService', () => {
  let service: SchoolstafService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolstafService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
