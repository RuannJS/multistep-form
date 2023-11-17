import { Injectable } from '@angular/core';
import { FormModel } from '../models/form-model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  completeForm: FormModel = {
    user: { name: '', email: '', phone: '' },
    plan: { billing: '', type: '', price: '' },
    addons: { larger: false, profile: false, service: false },
  };

  constructor() {}

  stepOne(name: string, email: string, phone: string) {
    this.completeForm.user = { name, email, phone };
  }
}
