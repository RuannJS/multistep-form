import { Injectable } from '@angular/core';
import { FormModel } from '../models/form-model';
import { Router } from '@angular/router';
import { SelectPlan } from '../models/plan-model';
import { Addon } from '../models/addon-model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private readonly router: Router) {}

  isPlanSelected: boolean = false;

  completeForm: FormModel = {
    user: { name: '', email: '', phone: '' },
    plan: { billing: '', type: '', price: 0 },
    addons: {
      larger: { checked: false, price: 0 },
      profile: { checked: false, price: 0 },
      service: { checked: false, price: 0 },
    },
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

  backToStepTwo() {
    this.router.navigate(['2']);
  }

  stepThree(addons: Addon[]) {
    const service = 'Online service';
    const larger = 'Larger storage';
    const profile = 'Customizable profile';

    addons.map((addon) => {
      if (this.completeForm.plan.billing === 'monthly') {
        if (addon.type === service) {
          this.completeForm.addons.service.checked = addon.checked;
          this.completeForm.addons.service.price = addon.price;
        } else if (addon.type === larger) {
          this.completeForm.addons.larger.checked = addon.checked;
          this.completeForm.addons.larger.price = addon.price;
        } else if (addon.type === profile) {
          this.completeForm.addons.profile.checked = addon.checked;
          this.completeForm.addons.profile.price = addon.price;
        }
      } else {
        if (addon.type === service) {
          this.completeForm.addons.service.checked = addon.checked;
          this.completeForm.addons.service.price = addon.price * 10;
        } else if (addon.type === larger) {
          this.completeForm.addons.larger.checked = addon.checked;
          this.completeForm.addons.larger.price = addon.price * 10;
        } else if (addon.type === profile) {
          this.completeForm.addons.profile.checked = addon.checked;
          this.completeForm.addons.profile.price = addon.price * 10;
        }
      }
    });

    this.router.navigate(['4']);
  }

  //
}
