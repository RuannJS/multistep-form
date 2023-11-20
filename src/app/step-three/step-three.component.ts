import { Component, OnInit } from '@angular/core';
import { addons } from './addons';
import { Addon } from '../models/addon-model';
import { FormService } from '../services/form.service';
@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css'],
})
export class StepThreeComponent implements OnInit {
  constructor(private readonly service: FormService) {}

  addons!: Addon[];

  billing!: string;

  ngOnInit(): void {
    this.addons = addons;
    this.billing = this.service.completeForm.plan.billing;
  }

  toggleAddon(addon: Addon) {
    if (addon.checked) {
      addon.checked = false;
    } else {
      addon.checked = true;
    }
  }

  goBack() {
    this.service.backToStepTwo();
  }

  onSubmit(addons: Addon[]) {
    this.service.stepThree(addons);
  }
}
