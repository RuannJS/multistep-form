import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

export const stepFourGuard: CanActivateFn = (route, state) => {
  const service: FormService = inject(FormService);
  const router: Router = inject(Router);

  if (
    service.completeForm.user.name === '' ||
    service.completeForm.plan.billing === ''
  ) {
    router.navigate(['']);
    return false;
  }

  return true;
};
