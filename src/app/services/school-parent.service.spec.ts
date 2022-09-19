import { TestBed } from '@angular/core/testing';

import { SchoolParentService } from './school-parent.service';

describe('SchoolParentService', () => {
  let service: SchoolParentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolParentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
