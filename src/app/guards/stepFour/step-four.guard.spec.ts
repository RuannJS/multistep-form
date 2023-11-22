import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { stepFourGuard } from './step-four.guard';

describe('stepFourGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => stepFourGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
