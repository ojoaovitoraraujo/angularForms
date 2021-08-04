import { TestBed } from '@angular/core/testing';

import { ExistsUserService } from './exists-user.service';

describe('ExistsUserService', () => {
  let service: ExistsUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExistsUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
