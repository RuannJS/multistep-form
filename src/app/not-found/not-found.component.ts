import { Component } from '@angular/core';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent {
  constructor(private readonly service: FormService) {}

  goBack() {
    this.service.redirectNotFound();
  }
}
