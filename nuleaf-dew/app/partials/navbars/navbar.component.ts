import {
  Component,
  ElementRef }    from '@angular/core';
import { Router } from '@angular/router';

import { Link }   from './link';


@Component({
  selector: 'ng-navbar',
  templateUrl: 'app/partials/navbars/navbar.component.html',
  styleUrls: ['app/partials/navbars/navbar.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
    '(window:scroll)' : 'onScroll()'
  },
})
export class NavbarComponent {
  constructor(
    private _elementRef: ElementRef,
    private router: Router) {
    router.events.subscribe(event => {
      switch (event.url) {
      case '/steminars':
        this.sublinks = this.eventLinks;
      };
    });
  }

  sublinks: Link[] = [];
  isShowingSubnavbar: boolean = false;

  eventLinks: Link[] = [
    { text: 'Upcoming Events', url: '/upcoming-events'},
    { text: 'STEMinars',       url: '/steminars'},
    { text: 'Calendar',        url: '/calendar'}
  ];

  setLinks(links: Link[]) {
    this.sublinks = links;
  }

  hideSubnavbar() {
    this.isShowingSubnavbar = false;
  };

  showSubnavbar() {
    if (this.sublinks.length > 0) {
      this.isShowingSubnavbar = true;
    }
  }
  
  toggleSubnavbar() {
    this.isShowingSubnavbar = !this.isShowingSubnavbar;
  };

  onClick(event) {
    if (!this._elementRef.nativeElement.contains(event.target)) {
      this.hideSubnavbar();
    }
  };

  prevScrolTop: number = 0;
  onScroll() {
    let currentScrollTop = document.body.scrollTop;
    if (currentScrollTop > this.prevScrolTop) {  // Scrolling down.
      this.hideSubnavbar();
    } else {                                     // Scrolling up.
      this.showSubnavbar();
    }
    this.prevScrolTop = currentScrollTop;
  };
};