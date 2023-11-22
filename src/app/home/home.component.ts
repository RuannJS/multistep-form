import { Component } from '@angular/core';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private readonly service: FormService) {}

  start() {
    this.service.start();
  }
}
