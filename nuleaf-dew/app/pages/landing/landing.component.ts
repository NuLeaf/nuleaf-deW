import { Component,
         ElementRef } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'nl-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css'],
  host: {
    '(window:scroll)': 'onScroll()'
  }
})
export class LandingComponent {
  constructor(private el: ElementRef) {}

  onScroll(): void {
  }
}