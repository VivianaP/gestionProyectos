import { TestBed } from '@angular/core/testing';

import { UserNotGuard } from './user-not.guard';

describe('UserNotGuard', () => {
  let guard: UserNotGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserNotGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
