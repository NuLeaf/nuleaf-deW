import { Component } from '@angular/core';
import { Router,
         Event } from '@angular/router';

interface Navigation {
  text: string;
  sublinks?: Link[];
}

interface Link {
  text: string;
  url: string;
}


@Component({
  moduleId: module.id,
  selector: 'nl-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  host: {
    '(window:scroll)' : 'onScroll()'
  }
})
export class NavbarComponent {
  navs: Navigation[] = [
    {
      text: 'About',
      sublinks: [
        { url: '/about/mission'   , text: 'Mission'    },
        { url: '/about/research'  , text: 'Research'   },
        { url: '/about/members'   , text: 'Members'    },
        { url: '/about/biomimicry', text: 'Biomimicry' }
      ]
    }
  ];
  sublinks: Link[] = [];
  isNavbarCollapsed = true;
  isSubnavbarCollapsed = true;

  private activeIndex: number;
  private routeIndex: number;
  
  constructor(private router: Router) {
    let urlMap = new Map<string, number>();
    this.navs.forEach((nav: Navigation, i: number) => {
      nav.sublinks.forEach((link: Link) => { urlMap.set(link.url, i); });
    });

    router.events.subscribe((event: Event) => {
      this.routeIndex = urlMap.get(event.url);
      this.hideSubnavbar();
    });
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    this.isSubnavbarCollapsed = this.isNavbarCollapsed || this.isSubnavbarCollapsed;
  }

  hideNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  showSubnavbar(i: number): boolean {
    if (i !== undefined) {
      this.activeIndex = i;
      this.sublinks = this.navs[i].sublinks;
      this.isSubnavbarCollapsed = false;
    }

    return false;
  }

  hideSubnavbar(): void {
    this.isSubnavbarCollapsed = true;
    this.activeIndex = undefined;
  }

  isActiveSubnav(i: number): boolean {
    return this.activeIndex == i || this.routeIndex == i;
  }

  private prevScrollTop: number = 0;
  onScroll() {
    let currentScrollTop = document.body.scrollTop;
    if (currentScrollTop > this.prevScrollTop) {  // Scrolling down.
      this.hideSubnavbar();
      this.hideNavbar();
    }
    else if (this.isSubnavbarCollapsed) this.showSubnavbar(this.routeIndex);  // Scrolling up.

    this.prevScrollTop = currentScrollTop;
  };
}