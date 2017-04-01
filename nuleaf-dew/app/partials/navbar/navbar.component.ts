import { Component } from '@angular/core';
import { Router,
         Event,
         NavigationEnd } from '@angular/router';

import { animations } from './navbar.animations';


interface Navigation {
  text: string;
  link?: string;
  sublinks?: Navigation[];
}


@Component({
  selector: 'nl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: animations,
  host: {
    '(window:scroll)' : 'onScroll()'
  }
})
export class NavbarComponent {
  navs: Navigation[] = [
    {
      text: 'About',
      sublinks: [
        { link: '/about/overview', text: 'Overview' },
        { link: '/about/biomimicry', text: 'Biomimicry' },
        { link: '/about/members', text: 'Members' }
      ]
    },
    {
      text: 'Products',
      sublinks: [
        { link: '/products/aw-pmfc', text: 'AW-PMFC' },
        { link: '/products/biosolar', text: 'Biosolar' }
      ]
    },
    {
      text: 'Blog',
      link: '/blog'
    },
    {
      text: 'Contact',
      link: '/contact'
    }
  ];

  activeNav: Navigation;
  routeNav: Navigation;

  constructor(private router: Router) {

    // Create mapping from url to nav
    let navMap = new Map<string, Navigation>();
    this.navs.forEach((nav: Navigation) => {
      let sublinks = nav.sublinks;
      if (sublinks) {
        sublinks.forEach((link: Navigation) => {
          navMap.set(link.link, nav);
        });
      }
      else navMap.set(nav.link, nav);
    });

    // Detect the nav based on the current url
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.routeNav = navMap.get(event.url);
      }
    });
  }

  private prevScrollTop: number = 0;
  onScroll() {
    let currentScrollTop = document.body.scrollTop;
    let isScrollingDown = currentScrollTop > this.prevScrollTop;
    this.prevScrollTop = currentScrollTop;

    this.activeNav = isScrollingDown ? null : this.routeNav;
  };
}