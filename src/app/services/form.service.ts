import { Injectable } from '@angular/core';
import { FormModel } from '../models/form-model';
import { Router } from '@angular/router';
import { SelectPlan } from '../models/plan-model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private readonly router: Router) {}

  isPlanSelected: boolean = false;

  completeForm: FormModel = {
    user: { name: '', email: '', phone: '' },
    plan: { billing: '', type: '', price: 0 },
    addons: { larger: false, profile: false, service: false },
  };

  stepOne(name: string, email: string, phone: string) {
    this.completeForm.user = { name, email, phone };
    this.router.navigate(['2']);
  }

  backToStepOne(plan: SelectPlan) {
    this.completeForm.plan = plan;
    this.isPlanSelected = true;

    this.router.navigate(['1']);
  }

  stepTwo(plan: SelectPlan) {
    this.completeForm.plan = plan;
    this.isPlanSelected = true;
    this.router.navigate(['3']);
  }

  //
}
