import {
  Component,
  ElementRef }  from '@angular/core';

import { Link } from './link';


@Component({
  selector: 'ng-navbar',
  templateUrl: 'app/partials/navbars/navbar.component.html',
  styleUrls: ['app/partials/navbars/navbar.component.css'],
  host: {'(document:click)': 'hideSubnavbar($event)'},
})
export class NavbarComponent {
  constructor(private _elementRef: ElementRef) { }

  sublinks: Link[] = [];
  isShowingSubnavbar: boolean = false;

  eventLinks: Link[] = [
    { text: 'Upcoming Events', url: '/upcoming-events'},
    { text: 'STEMinars',       url: '/steminars'},
    { text: 'Calendar',        url: '/calendar'}
  ];

  hideSubnavbar(event?) {
    if (event) {
      if (!this._elementRef.nativeElement.contains(event.target)) {
        this.isShowingSubnavbar = false;
      }
      return;
    }
    this.isShowingSubnavbar = false;
  };
  
  toggleSubnavbar(links: Link[]) {
    if (this.isShowingSubnavbar) {
      this.sublinks = [];
    } else {
      this.sublinks = links;
    }
    this.isShowingSubnavbar = !this.isShowingSubnavbar;
  };
};