var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { animations } from './navbar.animations';
var NavbarComponent = (function () {
    function NavbarComponent(router) {
        var _this = this;
        this.router = router;
        this.navs = [
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
        this.prevScrollTop = 0;
        var navMap = new Map();
        this.navs.forEach(function (nav) {
            var sublinks = nav.sublinks;
            if (sublinks) {
                sublinks.forEach(function (link) {
                    navMap.set(link.link, nav);
                });
            }
            else
                navMap.set(nav.link, null);
        });
        router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                _this.routeNav = navMap.get(event.url);
            }
        });
    }
    NavbarComponent.prototype.onScroll = function () {
        var currentScrollTop = document.body.scrollTop;
        var isScrollingDown = currentScrollTop > this.prevScrollTop;
        this.prevScrollTop = currentScrollTop;
        this.activeNav = isScrollingDown ? null : this.routeNav;
    };
    ;
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Component({
        selector: 'nl-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css'],
        animations: animations,
        host: {
            '(window:scroll)': 'onScroll()'
        }
    }),
    __metadata("design:paramtypes", [Router])
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map