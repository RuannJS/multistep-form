import { Injectable } from '@angular/core';
import { FormModel } from '../models/form-model';
import { Router } from '@angular/router';
import { SelectPlan } from '../models/plan-model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private readonly router: Router) {}

  completeForm: FormModel = {
    user: { name: '', email: '', phone: '' },
    plan: { billing: '', type: '', price: 0 },
    addons: { larger: false, profile: false, service: false },
  };

  stepOne(name: string, email: string, phone: string) {
    this.completeForm.user = { name, email, phone };
    this.router.navigate(['2']);
  }

  backToStepOne() {
    this.router.navigate(['1']);
  }

  stepTwo(plan: SelectPlan) {
    this.completeForm.plan = plan;
    this.router.navigate(['3']);
  }

  //
}
