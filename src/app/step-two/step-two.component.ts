import { Component, OnInit } from '@angular/core';
import { plans, yearlyBilling } from '../services/plans';
import { FormService } from '../services/form.service';
import { Plan, SelectPlan } from '../models/plan-model';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
})
export class StepTwoComponent implements OnInit {
  constructor(private readonly service: FormService) {}

  planList!: Plan[];
  yearlyBilling!: boolean;
  isPlanSelected!: boolean;

  selectedPlan: SelectPlan = {
    type: this.service.completeForm.plan.type,
    billing: this.service.completeForm.plan.billing,
    price: this.service.completeForm.plan.price,
  };

  ngOnInit(): void {
    this.planList = plans;
    this.yearlyBilling = yearlyBilling;
    this.isPlanSelected = this.service.isPlanSelected;
  }

  toggleBilling() {
    if (this.yearlyBilling) {
      this.yearlyBilling = false;
    } else {
      this.yearlyBilling = true;
    }
  }

  selectPlan(plan: Plan) {
    const { type, price } = plan;

    this.isPlanSelected = true;

    if (this.yearlyBilling) {
      this.selectedPlan.type = type;
      this.selectedPlan.price = price * 10;
      this.selectedPlan.billing = 'yearly';
    } else {
      this.selectedPlan.type = type;
      this.selectedPlan.price = price;
      this.selectedPlan.billing = 'monthly';
    }
  }

  onSubmit() {
    this.service.stepTwo(this.selectedPlan);
  }

  goBack() {
    this.service.backToStepOne(this.selectedPlan);
  }
}
