import { Component } from '@angular/core';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public readonly service: FormService) {}

  steps: string[] = ['1', '2', '3', '4'];
}
