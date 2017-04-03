var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { OverviewComponent } from './pages/about/overview/overview.component';
import { BiomimicryComponent } from './pages/about/biomimicry/biomimicry.component';
import { MembersComponent } from './pages/about/members/members.component';
import { AwpmfcComponent } from './pages/products/aw-pmfc/aw-pmfc.component';
import { BiosolarComponent } from './pages/products/biosolar/biosolar.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            HttpModule,
            AppRoutingModule
        ],
        declarations: [
            AppComponent,
            NavbarComponent,
            FooterComponent,
            LandingComponent,
            OverviewComponent,
            BiomimicryComponent,
            MembersComponent,
            AwpmfcComponent,
            BiosolarComponent,
            BlogComponent,
            ContactComponent
        ],
        providers: [],
        bootstrap: [
            AppComponent
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map