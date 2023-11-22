import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { SelectPlan } from '../models/plan-model';
import { SelectedAddons } from '../models/addon-model';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css'],
})
export class StepFourComponent implements OnInit {
  constructor(private readonly service: FormService) {}

  plan!: SelectPlan;
  addons!: SelectedAddons;

  ngOnInit(): void {
    this.plan = this.service.completeForm.plan;
    this.addons = this.service.completeForm.addons;
  }

  getTotalPrice() {
    let addonTotal: number = 0;
    let planPrice: number = this.plan.price;

    if (this.addons.larger.checked) {
      addonTotal += this.addons.larger.price;
    }
    if (this.addons.service.checked) {
      addonTotal += this.addons.service.price;
    }
    if (this.addons.profile.checked) {
      addonTotal += this.addons.profile.price;
    }

    return addonTotal + planPrice;
  }

  changePlan() {
    this.service.backToStepTwo();
  }

  goBack() {
    this.service.backToStepThree();
  }

  confirm() {
    this.service.confirm();
  }
}
