import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css'],
})
export class StepOneComponent {
  constructor(private readonly service: FormService) {}

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$'
      ),
      Validators.maxLength(11),
      Validators.minLength(9),
    ]),
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (
      this.userForm.controls.name.value !== null &&
      this.userForm.controls.email.value !== null &&
      this.userForm.controls.phone.value !== null
    ) {
      this.service.stepOne(
        this.userForm.controls.name.value,
        this.userForm.controls.email.value,
        this.userForm.controls.phone.value
      );
    }
  }
}
