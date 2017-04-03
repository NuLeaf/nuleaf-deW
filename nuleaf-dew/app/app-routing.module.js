var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { OverviewComponent } from './pages/about/overview/overview.component';
import { BiomimicryComponent } from './pages/about/biomimicry/biomimicry.component';
import { MembersComponent } from './pages/about/members/members.component';
import { AwpmfcComponent } from './pages/products/aw-pmfc/aw-pmfc.component';
import { BiosolarComponent } from './pages/products/biosolar/biosolar.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot([
                {
                    path: '',
                    pathMatch: 'full',
                    component: LandingComponent
                },
                { path: 'about/overview', component: OverviewComponent },
                { path: 'about/biomimicry', component: BiomimicryComponent },
                { path: 'about/members', component: MembersComponent },
                { path: 'products/aw-pmfc', component: AwpmfcComponent },
                { path: 'products/biosolar', component: BiosolarComponent },
                { path: 'blog', component: BlogComponent },
                { path: 'contact', component: ContactComponent }
            ])
        ],
        exports: [
            RouterModule
        ]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map