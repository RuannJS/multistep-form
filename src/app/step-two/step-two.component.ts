import { Component, OnInit } from '@angular/core';
import { plans } from '../services/plans';
import { Plan } from '../models/plan-model';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
})
export class StepTwoComponent implements OnInit {
  constructor(private readonly service: FormService) {}
  planList!: Plan[];

  ngOnInit(): void {
    this.planList = plans;

    console.log(this.service.completeForm);
  }
}
