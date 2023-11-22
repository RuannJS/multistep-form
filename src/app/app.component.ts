import { Component, OnInit, HostListener } from '@angular/core';
import { FormService } from './services/form.service';
import { Step } from './models/step-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public readonly service: FormService) {}

  getScreenWidth!: number;

  steps: Step[] = [
    {
      step: '1',
      text: 'your info',
    },
    {
      step: '2',
      text: 'select plan',
    },
    {
      step: '3',
      text: 'add-ons',
    },
    {
      step: '4',
      text: 'summary',
    },
  ];

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
