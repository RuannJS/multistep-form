import { Injectable } from '@angular/core';
import { FormModel } from '../models/form-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private readonly router: Router) {}

  completeForm: FormModel = {
    user: { name: '', email: '', phone: '' },
    plan: { billing: '', type: '', price: '' },
    addons: { larger: false, profile: false, service: false },
  };

  stepOne(name: string, email: string, phone: string) {
    this.completeForm.user = { name, email, phone };
    this.router.navigate(['2']);
  }

  //
}
